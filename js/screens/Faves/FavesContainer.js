import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ActivityIndicator, View, Text } from 'react-native';
import { Header } from '../../config/styles';
import FavesContext from '../../context';
import Faves from './Faves';

export default class FavesContainer extends Component {
  static navigationOptions = {
    title: 'Faves',
    headerTintColor: '#fff',
    headerTitleStyle: { ...Header }
  };

  render() {
    return (
      <Query
        query={gql`
          {
            allSessions {
              id
              title
              startTime
              location
              description

              speaker {
                id
                image
                name
                url
                bio
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <ActivityIndicator size="large" style={{ height: '100%' }} />
            );
          if (error) return <Text>{`Error! ${error.message}`}</Text>;
          console.log(error);

          console.log('!!!!!!!!!', data);
          return (
            <FavesContext.Consumer>
              {({ faveIds }) => {
                let filterSessions = data.allSessions.filter(event => {
                  return faveIds.includes(event.id);
                });
                console.log(filterSessions);
                return <Faves sessions={filterSessions} faveIds={faveIds} />;
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

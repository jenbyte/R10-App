import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Schedule from './Schedule';
import { formatSessionData } from '../../lib/helpers/dataFormatHelpers';
import { ActivityIndicator, Text } from 'react-native';
import { Header } from '../../config/styles';
import { FavesContext } from '../../context';

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule',
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
        <FavesContext.Consumer>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <ActivityIndicator size="large" style={{ height: '100%' }} />
              );
            if (error) return <Text>{`Error! ${error.message}`}</Text>;
            console.log(error);
            console.log(data);
            return <Schedule data={formatSessionData(data.allSessions)} />;
          }}
        </FavesContext.Consumer>
      </Query>
    );
  }
}

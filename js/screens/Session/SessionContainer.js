import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Session from './Session';
import { formatSessionData } from '../../lib/helpers/dataFormatHelpers';
import { ActivityIndicator, Text } from 'react-native';
import { Header } from '../../config/styles';

export default class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session',
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
              description
              startTime
              location
              speaker {
                bio
                id
                image
                name
                url
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>{`Error! ${error.message}`}</Text>;
          console.log(error);
          return <Session data={formatSessionData(data.allSessions)} />;
        }}
      </Query>
    );
  }
}

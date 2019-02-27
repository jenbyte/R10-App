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
    const { navigation } = this.props;
    const id = navigation.getParam('id', 'Peter');
    const title = navigation.getParam('title', 'Peter');
    const location = navigation.getParam('location', 'Peter');
    const time = navigation.getParam('time', 'Peter');

    return (
      <Query
        query={gql`
          query allSessions($id: ID) {
            allSessions(filter: { id: $id }) {
              id
              description
              speaker {
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
          console.log(data);
          return (
            <Session
              data={data.allSessions}
              title={title}
              time={time}
              location={location}
              id={id}
              navigation={this.props.navigation}
            />
          );
        }}
      </Query>
    );
  }
}

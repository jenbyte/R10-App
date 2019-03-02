import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import About from './About';
import { Header } from '../../config/styles';
import { ActivityIndicator } from 'react-native';

export default class AboutContainer extends Component {
  static navigationOptions = {
    title: 'About',
    headerTintColor: '#fff',
    headerTitleStyle: { ...Header }
  };

  render() {
    return (
      <Query
        query={gql`
          {
            allConducts {
              id
              title
              description
              order
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

          return <About data={data} />;
        }}
      </Query>
    );
  }
}

import React, { Component } from 'react';
import { ActivityIndicator, Platform, Text, View } from 'react-native';
import client from './config/api';
import { ApolloProvider } from 'react-apollo';
import About from './screens/About';
import RootStackNavigator from './navigation/RootStackNavigator';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
        {/* {this.state.isLoading ? <ActivityIndicator size="large" /> : <About />} */}
      </ApolloProvider>
    );
  }
}

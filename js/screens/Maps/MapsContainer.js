import React, { Component } from 'react';
import { Header } from '../../config/styles';
import Maps from './Maps';
import { View } from 'react-native';

export default class MapsContainer extends Component {
  static navigationOptions = {
    title: 'Map',
    headerTintColor: '#fff',
    headerTitleStyle: { ...Header }
  };

  render() {
    return (
      // <View>
      //   {({ loading, error }) => {
      //     if (loading)
      //       return (
      //         <ActivityIndicator size="large" style={{ height: '100%' }} />
      //       );
      //     if (error) return <Text>{`Error! ${error.message}`}</Text>;
      //     console.log(error);

      // return
      <Maps latitude={49.2633479} longitude={-123.1403165} />
      //   }}
      // </View>
    );
  }
}

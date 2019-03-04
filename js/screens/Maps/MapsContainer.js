import React, { Component } from 'react';
import { Header } from '../../config/styles';
import Maps from './Maps';

export default class MapsContainer extends Component {
  static navigationOptions = {
    title: 'Map',
    headerTintColor: '#fff',
    headerTitleStyle: { ...Header }
  };

  render() {
    return <Maps latitude={49.2633479} longitude={-123.1403165} />;
  }
}

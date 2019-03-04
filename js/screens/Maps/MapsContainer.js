import React, { Component } from 'react';
import { Header } from '../../config/styles';
import Maps from './Maps';
import { MapView } from 'react-native-maps';

export default class MapsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'Map',
    headerTintColor: '#fff',
    headerTitleStyle: { ...Header }
  };

  render() {
    return <Maps latitude={49.2633479} longitude={-123.1403165} />;
  }
}

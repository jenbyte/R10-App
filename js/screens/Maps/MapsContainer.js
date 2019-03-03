import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
    return (
      <View>
        <Maps />
      </View>
    );
  }
}

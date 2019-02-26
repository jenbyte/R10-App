import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../config/styles';

export default class MapsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Maps! </Text>
      </View>
    );
  }
}

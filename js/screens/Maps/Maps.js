import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Image
          style={styles.map}
          source={require('../../assets/images/R10-map.png')}
        />
      </View>
    );
  }
}

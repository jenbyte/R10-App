import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { MapView, Marker } from 'react-native-maps';

export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      //   <View>
      //     {/* <Image
      //       style={styles.map}
      //       source={require('../../assets/images/R10-map.png')}
      //     /> */}
      //   </View>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    );
  }
}

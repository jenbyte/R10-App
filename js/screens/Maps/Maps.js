import React, { Component } from 'react';
import styles from './styles';
import MapView, { Marker } from 'react-native-maps';

const Maps = ({ latitude, longitude }) => {
  return (
    <MapView
      style={styles.map}
      region={{
        longitude,
        latitude,
        latitudeDelta: 0.075,
        longitudeDelta: 0.075
      }}
    >
      <Marker
        coordinate={{ latitude, longitude }}
        image={require('../../assets/images/map_pin.png')}
      />
    </MapView>
  );
};

export default Maps;

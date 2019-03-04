import React from 'react';
import styles from './styles';
import { Image } from 'react-native';

const Maps = () => {
  return (
    <Image
      style={styles.map}
      source={require('../../assets/images/R10-map.png')}
    />
  );
};

export default Maps;

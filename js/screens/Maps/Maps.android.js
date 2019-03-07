import React from 'react';
import styles from './styles';
import { Text, View } from 'react-native';
import { Font } from '../../config/styles';

const Maps = () => {
  return (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 100,
        margin: 'auto'
      }}
    >
      <Text
        style={{
          fontFamily: Font.reg,
          fontSize: 20,
          textAlign: 'center'
        }}
      >
        Maps is currently unavailable
      </Text>
    </View>
  );
};

export default Maps;

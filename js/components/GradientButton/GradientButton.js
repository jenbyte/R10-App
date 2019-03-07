import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { Btn } from '../../config/styles';
import PropTypes from 'prop-types';

const GradientButton = ({ title, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 60
        }}
      >
        <LinearGradient
          colors={['#9963ea', '#8797D6']}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 0.0 }}
          style={[StyleSheet.absoluteFill, { ...Btn }]}
        />
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

GradientButton.propTypes = {
  title: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired
};

export default GradientButton;

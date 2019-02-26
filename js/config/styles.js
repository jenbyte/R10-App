import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingRight: 25,
  paddingLeft: 25
};

export const Colors = {
  mediumGrey: '#999999',
  lightGrey: '#e6e6e6',
  blue: '#8797D6',
  purple: '#9963ea',
  red: '#cf392a',
  black: '#000',
  white: '#fff'
};

export const Font = {
  light: '../assets/fonts/Montserrat-Light.ttf',
  reg: 'Montserrat-Regular'
};

export const Header = {
  fontSize: 20,
  fontFamily: Font.reg,
  fontWeight: 'bold'
};

// ...Plateform.select({
//   ios: { color: '' },
//   android: { color: '' }
// })

// borderBottomWidth: StyleSheet.hairlineWidth,

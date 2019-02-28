import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = {
  flex: 1,
  // justifyContent: 'center',
  // alignItems: 'center',
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
  light: 'Montserrat-Light',
  reg: 'Montserrat-Regular'
};

export const FontSize = {
  title: 24,
  subtitle: 20,
  body: 16,
  description: 18
};

export const Header = {
  fontSize: 20,
  fontFamily: Font.reg,
  fontWeight: 'bold'
};

export const Divider = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: '#999999'
};

export const Button = {
  height: 45,
  // width: '70%',
  justifyContent: 'center',
  margin: 15,
  borderRadius: 25
};

// ...Plateform.select({
//   ios: { color: '' },
//   android: { color: '' }
// })

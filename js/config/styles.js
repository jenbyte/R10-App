import { StyleSheet, Platform } from 'react-native';

export const Container = {
  flex: 1,
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
  ...Platform.select({
    ios: { reg: 'Montserrat' },
    android: { reg: 'Montserrat-Regular' }
  })
};

export const FontSize = {
  title: 24,
  subtitle: 18,
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

export const Btn = {
  height: 45,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 15,
  borderRadius: 25
};

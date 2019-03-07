import { StyleSheet } from 'react-native';
import { Font } from '../../config/styles';

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%'
  },
  view: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 150,
    margin: 'auto'
  },
  text: {
    fontFamily: Font.reg,
    fontSize: 20,
    textAlign: 'center'
  }
});

export default styles;

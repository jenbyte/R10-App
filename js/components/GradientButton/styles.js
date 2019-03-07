import { StyleSheet } from 'react-native';
import { Font, FontSize } from '../../config/styles';

const styles = StyleSheet.create({
  btnText: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: Font.reg,
    fontSize: FontSize.description,

    margin: 30
  }
});

export default styles;

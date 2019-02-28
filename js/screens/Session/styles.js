import { StyleSheet, Dimensions } from 'react-native';
import {
  Container,
  Colors,
  Font,
  FontSize,
  Divider
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    paddingRight: 25,
    paddingLeft: 25,
    height: Dimensions.get('window').height
  },

  title: {
    fontSize: FontSize.title,
    fontFamily: Font.reg
  },
  location: {
    color: Colors.mediumGrey,
    fontWeight: 'bold',
    fontFamily: Font.reg,
    fontSize: FontSize.description,

    paddingTop: 25,
    paddingBottom: 15
  },
  time: {
    color: Colors.red,
    fontWeight: 'bold',
    fontSize: FontSize.description,
    marginTop: 15,
    marginBottom: 15
  },
  description: {
    fontFamily: Font.light,
    fontSize: FontSize.description,
    lineHeight: 26
  },

  speaker: {
    fontFamily: Font.reg,
    fontSize: FontSize.description,

    paddingRight: 25,
    paddingLeft: 25
  },

  divider: {
    ...Divider,
    marginTop: 20,
    marginBottom: 20
  },
  button: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: Font.reg,
    fontSize: FontSize.description
  }
});

export default styles;

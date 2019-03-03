import { StyleSheet, Dimensions } from 'react-native';
import {
  Container,
  Colors,
  Font,
  FontSize,
  Divider
} from '../../config/styles';

const styles = StyleSheet.create({
  divider: {
    ...Divider
  },
  event: {
    margin: 20,
    marginLeft: 20,
    marginRight: 15,

    width: Dimensions.get('window').width * 0.9
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Font.reg,
    marginBottom: 4
  },
  location: {
    color: Colors.mediumGrey,
    fontWeight: 'bold',
    fontFamily: Font.reg
  },
  time: {
    backgroundColor: Colors.lightGrey,
    fontWeight: 'bold',
    fontFamily: Font.reg,

    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20
  }
});

export default styles;

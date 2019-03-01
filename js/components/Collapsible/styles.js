import { StyleSheet } from 'react-native';
import { Colors, Font, FontSize } from '../../config/styles';

const styles = StyleSheet.create({
  listTitle: {
    color: '#9963ea',
    fontWeight: '600',
    fontFamily: Font.reg,
    fontSize: FontSize.body,

    marginBottom: 15,
    paddingLeft: 15
  },
  bullet: {
    color: Colors.purple,
    fontWeight: 'bold'
  },
  description: {
    fontFamily: Font.light,
    fontSize: FontSize.body,
    lineHeight: 24,
    marginBottom: 20
  }
});

export default styles;

import { StyleSheet } from 'react-native';
import { Container, Font, FontSize, Divider } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...Container
  },
  logo: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 25,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  divider: {
    ...Divider,
    marginBottom: 20
  },

  title: {
    fontSize: FontSize.title,
    fontFamily: Font.reg,

    marginBottom: 15
  },
  listTitle: {
    color: '#9963ea',
    fontWeight: '600',
    fontFamily: Font.reg,
    fontSize: FontSize.subtitle,

    marginBottom: 15
  },
  description: {
    fontFamily: Font.light,
    fontSize: FontSize.body,
    lineHeight: 24,
    marginBottom: 20
  },
  copyright: {
    fontFamily: Font.light,
    fontSize: FontSize.body,
    marginBottom: 20
  }
});

export default styles;

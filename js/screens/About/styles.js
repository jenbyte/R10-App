import { StyleSheet } from 'react-native';
import { Container } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...Container
  },
  logo: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  title: {
    // color: '#999999',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 15
  },

  flatList: {
    lineHeight: 5
  },
  listTitle: {
    color: '#9963ea',
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 15
  },
  description: {
    // color: '#999'
  }
});

export default styles;

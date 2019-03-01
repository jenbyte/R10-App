import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20
  },
  logo: {
    borderBottomWidth: 1,
    borderColor: '#e6e6e6'
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

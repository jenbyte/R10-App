import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingRight: 25,
    paddingLeft: 25
  },
  logo: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
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

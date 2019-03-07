import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors, Font, FontSize } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    paddingRight: 25,
    paddingLeft: 25,
    height: Dimensions.get('window').height
  },
  flex: {
    flexDirection: 'row'
  },
  title: {
    fontSize: FontSize.title,
    fontFamily: Font.reg
  },
  location: {
    color: Colors.mediumGrey,
    fontWeight: 'bold',
    fontFamily: Font.reg,
    fontSize: FontSize.body,

    paddingTop: 25,
    paddingBottom: 15
  },
  time: {
    color: Colors.red,
    fontWeight: 'bold',
    fontSize: FontSize.body,
    fontFamily: Font.light,
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
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.mediumGrey,
    marginTop: 16
  },
  addBtn: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: Font.reg,
    fontSize: FontSize.description,
    margin: 60,
    marginTop: 15,
    marginBottom: 20
  },
  removeBtn: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: Font.reg,
    fontSize: FontSize.description,
    margin: 30,
    marginTop: 15
  },
  btn: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: Font.reg,
    fontSize: FontSize.description,
    margin: 30,
    marginTop: 15
  },
  btnAndroid: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: Font.reg,
    fontSize: FontSize.description,
    marginTop: 25
  }
});

export default styles;

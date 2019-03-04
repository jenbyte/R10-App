import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Font, FontSize } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    color: '#fff',
    flex: 1,
    padding: 15,
    paddingBottom: 30,
    height: Dimensions.get('window').height
  },
  speakerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingBottom: 0,

    ...Platform.select({
      ios: { height: 100 },
      android: { paddingTop: 25, paddingBottom: 25 }
    })
  },
  speakerTitle: {
    color: '#fff',
    fontSize: FontSize.description,
    fontFamily: Font.reg
  },

  wrapper: {
    backgroundColor: '#fff',
    borderRadius: 7,
    flex: 1,
    padding: 25,

    ...Platform.select({
      ios: { maxHeight: 625 },
      android: { maxHeight: 1000 }
    })
  },
  avatar: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 60
  },
  name: {
    alignSelf: 'center',
    fontSize: FontSize.title,
    fontFamily: Font.reg,
    marginTop: 15,
    marginBottom: 20
  },
  bio: {
    fontFamily: Font.light,
    lineHeight: 26,
    marginBottom: 20,

    ...Platform.select({
      ios: { fontSize: FontSize.body },
      android: { fontSize: FontSize.description }
    })
  },
  wikiLink: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: Font.reg,
    fontSize: FontSize.description,
    marginTop: 25
  }
});

export default styles;

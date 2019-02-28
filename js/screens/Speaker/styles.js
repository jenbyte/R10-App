import { StyleSheet, Dimensions } from 'react-native';
import { Container, Colors, Font, FontSize } from '../../config/styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 25,
    paddingLeft: 25,
    width: '100%',
    height: Dimensions.get('window').height
  },
  wrapper: {
    backgroundColor: '#fff',
    borderRadius: 7,
    height: '75%',
    padding: 20,
    paddingTop: 25
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  bioHeading: {
    color: '#fff',
    fontSize: FontSize.description,
    fontFamily: Font.reg,
    // height: 150,
    // alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 25
  },
  title: {
    alignSelf: 'center',
    fontSize: FontSize.title,
    fontFamily: Font.reg,
    marginTop: 15,
    marginBottom: 15
  },
  description: {
    alignSelf: 'center',
    fontFamily: Font.light,
    fontSize: FontSize.body,
    lineHeight: 24,
    marginBottom: 15
  },
  wikiLink: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: Font.reg,
    fontSize: FontSize.description
  }
});

export default styles;

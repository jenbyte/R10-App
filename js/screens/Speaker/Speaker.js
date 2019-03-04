import React, { Component } from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { Btn } from '../../config/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

class Speaker extends Component {
  render() {
    const { speaker } = this.props;

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
          <View style={styles.speakerHeader}>
            <Icon
              name={Platform.select({
                ios: 'ios-close',
                android: 'md-close'
              })}
              size={30}
              color={'white'}
              style={{ justifyContent: 'flex-start' }}
            />
            <Text style={styles.speakerTitle}>About the Speaker</Text>
            <View />
          </View>
        </TouchableHighlight>

        <ScrollView style={styles.wrapper}>
          <Image style={styles.avatar} source={{ uri: speaker.image }} />
          <Text style={styles.name}>{speaker.name}</Text>
          <Text style={styles.bio}>{speaker.bio}</Text>

          <TouchableOpacity onPress={() => Linking.openURL(`${speaker.url}`)}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <LinearGradient
                colors={['#9963ea', '#8797D6']}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 0.0 }}
                style={[StyleSheet.absoluteFill, { ...Btn }]}
              />
              <Text style={styles.wikiLink}>Read More on Wikipedia</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

Speaker.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Speaker;

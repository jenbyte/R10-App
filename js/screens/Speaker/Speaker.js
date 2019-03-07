import React, { Component } from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import GradientButton from '../../components/GradientButton';

class Speaker extends Component {
  render() {
    const { speaker } = this.props;
    console.log(this.props, '^^^^^^');
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={() => this.props.navigation.goBack()}
        >
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

          <GradientButton
            title={'Read More on Wikipedia'}
            handlePress={() => {
              Linking.openURL(`${speaker.url}`);
            }}
          />
          {/* <TouchableOpacity onPress={() => Linking.openURL(`${speaker.url}`)}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 60
              }}
            >
              <LinearGradient
                colors={['#9963ea', '#8797D6']}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 0.0 }}
                style={[StyleSheet.absoluteFill, { ...Btn }]}
              />
              <Text style={styles.wikiLink}>Read More on Wikipedia</Text>
            </View>
          </TouchableOpacity> */}
        </ScrollView>
      </View>
    );
  }
}

Speaker.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Speaker;

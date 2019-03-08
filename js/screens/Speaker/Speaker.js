import React, { Component } from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import GradientButton from '../../components/GradientButton';

const Speaker = props => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={'transparent'}
        onPress={() => props.navigation.goBack()}
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
        <Image style={styles.avatar} source={{ uri: props.speaker.image }} />
        <Text style={styles.name}>{props.speaker.name}</Text>
        <Text style={styles.bio}>{props.speaker.bio}</Text>

        <GradientButton
          title={'Read More on Wikipedia'}
          handlePress={() => {
            Linking.openURL(`${props.speaker.url}`);
          }}
        />
      </ScrollView>
    </View>
  );
};

Speaker.propTypes = {
  navigation: PropTypes.object.isRequired,
  speaker: PropTypes.object
};

export default Speaker;

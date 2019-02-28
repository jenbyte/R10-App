import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Horizontal,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import styles from './styles';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from '../../config/styles';

export default class Session extends Component {
  render() {
    console.log(this.props);

    const {
      title,
      location,
      startTime,
      description,
      speaker
    } = this.props.data;

    let { navigate } = this.props.navigation;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.location}>{location} </Text>
        <Text style={styles.title}>{title} </Text>
        <Text style={styles.time}>{moment(startTime).format('LT')} </Text>
        <Text style={styles.description}>{description}</Text>

        <Text style={styles.location}>Presented by:</Text>

        <TouchableHighlight onPress={() => navigate('Speaker', { speaker })}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ width: 60, height: 60, borderRadius: 30 }}
              source={{ uri: speaker.image }}
            />
            <Text style={styles.speaker}>{speaker.name}</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.divider} />

        <TouchableHighlight onPress={() => {}}>
          <LinearGradient
            colors={['#9963ea', '#8797D6']}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[StyleSheet.absoluteFill, { ...Button }]}
          >
            <Text style={styles.button}>Add to Faves</Text>
          </LinearGradient>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

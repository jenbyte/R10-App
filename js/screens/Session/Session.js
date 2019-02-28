import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Platform
} from 'react-native';
import styles from './styles';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from '../../config/styles';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../config/styles';

class Session extends Component {
  render() {
    console.log(this.props);

    const {
      id,
      title,
      location,
      startTime,
      description,
      speaker
    } = this.props.data;

    let { navigate } = this.props.navigation;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.flex}>
          {this.props.faveIds.includes(this.props.id) ? (
            <Ionicons
              name={Platform.select({
                ios: 'ios-heart',
                android: 'md-heart'
              })}
              size={30}
              color={Colors.red}
              style={styles.fave}
            />
          ) : null}
          <Text style={styles.location}>{location} </Text>
        </View>
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
        {this.props.faveIds.includes(this.props.id) ? (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              console.log('pressed!!!');
              this.props.removeFaveId(id);
            }}
          >
            <LinearGradient
              colors={['#9963ea', '#8797D6']}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 0.0 }}
              style={[StyleSheet.absoluteFill, { ...Button }]}
            >
              <Text style={styles.button}>Remove from Faves</Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.props.setFaveId(id);
              console.log('add fave!! <3');
            }}
          >
            <LinearGradient
              colors={['#9963ea', '#8797D6']}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 0.0 }}
              style={[StyleSheet.absoluteFill, { ...Button }]}
            >
              <Text style={styles.button}>Add to Faves</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </ScrollView>
    );
  }
}

export default withNavigation(Session);

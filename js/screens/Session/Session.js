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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Text style={styles.location}>{location} </Text>

          {this.props.faveIds.includes(id) ? (
            <Ionicons
              name={Platform.select({
                ios: 'ios-heart',
                android: 'md-heart'
              })}
              size={25}
              color={Colors.red}
              style={styles.fave}
            />
          ) : null}
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

        {this.props.faveIds.includes(id) ? (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
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

export default Session;

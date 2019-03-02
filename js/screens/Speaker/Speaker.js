import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  StyleSheet,
  Linking,
  Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { Button } from '../../config/styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Speaker extends Component {
  render() {
    console.log('#############', this.props);
    const { speaker } = this.props;

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 30,
              paddingBottom: 15,
              height: 100,
              width: '80%'
            }}
          >
            <Icon
              name={Platform.select({
                ios: 'ios-close',
                android: 'md-close'
              })}
              size={45}
              color={'white'}
              style={{ justifyContent: 'flex-start' }}
            />

            <Text style={styles.bioHeading}>About the Speaker</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.wrapper}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <Image
              style={{
                alignSelf: 'center',
                width: 120,
                height: 120,
                borderRadius: 60
              }}
              source={{ uri: speaker.image }}
            />
            <Text style={styles.title}>{speaker.name}</Text>
            <Text style={styles.description}>{speaker.bio}</Text>
          </ScrollView>

          <TouchableHighlight
            style={{ marginTop: -20 }}
            onPress={() => Linking.openURL(`${speaker.url}`)}
          >
            <LinearGradient
              colors={['#9963ea', '#8797D6']}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 0.0 }}
              style={[StyleSheet.absoluteFill, { ...Button }]}
            >
              <Text style={styles.wikiLink}>Read More on Wikipedia</Text>
            </LinearGradient>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

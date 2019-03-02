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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
            <View>
              <Icon
                name={Platform.select({
                  ios: 'ios-close',
                  android: 'md-close'
                })}
                size={60}
                color={'white'}
              />
            </View>
          </TouchableHighlight>

          <Text style={styles.bioHeading}>About the Speaker</Text>
          <View />
        </View>

        {/* <View style={styles.wrapper}> */}
        <ScrollView contentContainerStyle={styles.wrapper}>
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

          <TouchableHighlight
            style={{ zIndex: 5 }}
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
        </ScrollView>
        {/* </View> */}
      </View>
    );
  }
}

import React, { Component } from 'react';
import { Button, View, Text, Image, SectionList } from 'react-native';
import styles from './styles';
import moment from 'moment';

export default class Session extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.location}> {this.props.location} </Text>
        <Text style={styles.title}> {this.props.title} </Text>
        <Text style={styles.time}> {this.props.time} </Text> */}

        <Button title="Remove from Faves" />
      </View>
    );
  }
}

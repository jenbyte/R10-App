import React, { Component } from 'react';
import { View, Text, SectionList, TouchableHighlight } from 'react-native';
import styles from './styles';
import moment from 'moment';
import { createStackNavigator } from 'react-navigation';

export default class Schedule extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          renderItem={({ item }) => {
            return (
              <TouchableHighlight //   style={styles.event}
                onPress={() => this.props.navigation.navigate('Session')}
              >
                <View style={styles.event}>
                  <Text style={styles.listTitle}>{item.title} </Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
              </TouchableHighlight>
            );
          }}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.time}>{moment(title).format('LT')}</Text>
          )}
          sections={this.props.data}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

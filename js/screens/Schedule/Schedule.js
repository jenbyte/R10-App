import React, { Component } from 'react';
import { View, Text, SectionList, TouchableHighlight } from 'react-native';
import styles from './styles';
import moment from 'moment';
import { createStackNavigator, withNavigation } from 'react-navigation';

class Schedule extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          renderItem={({ item }) => {
            return (
              <TouchableHighlight //   style={styles.event}
                key={item.id}
                onPress={() =>
                  this.props.navigation.navigate('Session', {
                    title: item.title,
                    location: item.location,
                    time: item.startTime,
                    id: item.id
                  })
                }
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

export default withNavigation(Schedule);

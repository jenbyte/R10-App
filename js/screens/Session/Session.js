import React, { Component } from 'react';
import { Button, View, Text, Image, SectionList } from 'react-native';
import styles from './styles';
import moment from 'moment';

export default class Schedule extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          renderItem={({ item }) => {
            return (
              <View style={styles.schedule}>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.listTitle}>{item.title} </Text>
                <Text style={styles.time}>{item.location}</Text>
                <Button title="Remove from Faves" />
              </View>
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

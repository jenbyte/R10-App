import React, { Component } from 'react';
import { View, Text, SectionList, TouchableHighlight } from 'react-native';
import styles from './styles';
import moment from 'moment';
import { withNavigation } from 'react-navigation';

class Faves extends Component {
  render() {
    let { navigate } = this.props.navigation;
    console.log(this.props);
    console.log(faveIds);
    return (
      <View style={styles.container}>
        {/* {faveIds ? } */}
        <SectionList
          renderItem={({ item }) => {
            return (
              <View style={styles.divider}>
                <TouchableHighlight //   style={styles.event}
                  key={item.id}
                  onPress={() => navigate('Session', { session: item })}
                >
                  <View style={styles.event}>
                    <Text style={styles.listTitle}>{item.title} </Text>
                    <Text style={styles.location}>{item.location}</Text>
                  </View>
                </TouchableHighlight>
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

export default withNavigation(Faves);

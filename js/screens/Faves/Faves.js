import React, { Component } from 'react';
import {
  Platform,
  View,
  Text,
  SectionList,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import { Colors } from '../../config/styles';

class Faves extends Component {
  render() {
    let { navigate } = this.props.navigation;
    console.log(this.props);
    return (
      <View style={styles.container}>
        {/* <SectionList
          renderItem={({ item }) => {
            console.log('hihihi', item);
            return (
              <View style={styles.divider}>
                <TouchableHighlight
                  key={item.id}
                  onPress={() => navigate('Session', { session: item })}
                >
                  <View style={styles.event}>
                    <Text style={styles.listTitle}>{item.title} </Text>
                    <Text style={styles.location}>{item.location}</Text>
                  </View>
                  <Ionicons
                    name={Platform.select({
                      ios: 'ios-heart',
                      android: 'md-heart'
                    })}
                    size={25}
                    color={Colors.red}
                    style={styles.fave}
                  />
                </TouchableHighlight>
              </View>
            );
          }}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.time}>{moment(title).format('LT')}</Text>
          )}
          sections={this.props.data}
          keyExtractor={item => item.id}
        /> */}
      </View>
    );
  }
}

export default withNavigation(Faves);

import React, { Component } from 'react';
import {
  Platform,
  View,
  Text,
  SectionList,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';
import { Colors } from '../../config/styles';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

class Faves extends Component {
  render() {
    let { navigate } = this.props.navigation;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <SectionList
          keyExtractor={item => item.id}
          sections={this.props.sessions}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <View style={styles.divider}>
                <TouchableHighlight
                  key={item.id}
                  onPress={() => {
                    navigate('Session', { session: item });
                  }}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.event}>
                      <Text style={styles.listTitle}>{item.title} </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <Text style={styles.location}>{item.location}</Text>

                        <Ionicons
                          name={Platform.select({
                            ios: 'ios-heart',
                            android: 'md-heart'
                          })}
                          size={20}
                          color={Colors.red}
                          style={styles.fave}
                        />
                      </View>
                    </View>
                  </View>
                </TouchableHighlight>
              </View>
            );
          }}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.time}>{moment(title).format('LT')}</Text>
          )}
        />
      </View>
    );
  }
}

Faves.propTypes = {
  sessions: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default withNavigation(Faves);

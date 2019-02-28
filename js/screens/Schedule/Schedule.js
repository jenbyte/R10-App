import React, { Component } from 'react';
import { View, Text, SectionList, TouchableHighlight } from 'react-native';
import styles from './styles';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Schedule extends Component {
  render() {
    let { navigate } = this.props.navigation;
    console.log(this.props);

    return (
      <View style={styles.container}>
        <SectionList
          renderItem={({ item }) => {
            return (
              <View style={styles.divider}>
                <TouchableHighlight //   style={styles.event}
                  key={item.id}
                  onPress={() => navigate('Session', { session: item })}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%'
                    }}
                  >
                    <View style={styles.event}>
                      <Text style={styles.listTitle}>{item.title} </Text>
                      <Text style={styles.location}>{item.location}</Text>
                    </View>

                    {/* {this.props.faveIds.includes(item.id) ? (
                      <Ionicons
                        name={Platform.select({
                          ios: 'ios-heart',
                          android: 'md-heart'
                        })}
                        size={25}
                        color={Colors.red}
                        style={styles.fave}
                      />
                    ) : null} */}
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

export default withNavigation(Schedule);

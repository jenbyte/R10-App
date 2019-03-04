import React, { Component } from 'react';
import { View, Text, SectionList, TouchableHighlight } from 'react-native';
import styles from './styles';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../config/styles';
import PropTypes from 'prop-types';

class Schedule extends Component {
  render() {
    let { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <SectionList
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.divider}>
                <TouchableHighlight
                  key={item.id}
                  onPress={() => {
                    if (!item.speaker) {
                      navigate('', {});
                    } else {
                      navigate('Session', { session: item });
                    }
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row'
                    }}
                  >
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
                        {this.props.faveIds.includes(item.id) ? (
                          <Ionicons
                            name={'md-heart'}
                            size={20}
                            color={Colors.red}
                            style={styles.fave}
                          />
                        ) : null}
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
          sections={this.props.data}
        />
      </View>
    );
  }
}

Schedule.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default withNavigation(Schedule);

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Platform,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../config/styles';
import { withNavigation } from 'react-navigation';
import GradientButton from '../../components/GradientButton';

const Session = props => {
  console.log(props);
  const { id, title, location, startTime, description, speaker } = props.item;
  const { faveIds, removeFaveId, setFaveId } = props;
  const { navigate } = props.navigation;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Text style={styles.location}>{location}</Text>

        {faveIds.includes(id) ? (
          <Ionicons
            name={Platform.select({ android: 'md-heart', ios: 'ios-heart' })}
            size={25}
            color={Colors.red}
            style={styles.fave}
          />
        ) : null}
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{moment(startTime).format('LT')} </Text>
      <Text style={styles.description}>{description}</Text>

      <Text style={styles.location}>Presented by:</Text>

      <TouchableHighlight
        underlayColor={'transparent'}
        onPress={() => navigate('Speaker', { speaker })}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 30 }}
            source={{ uri: speaker.image }}
          />
          <Text style={styles.speaker}>{speaker.name}</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.divider} />

      <GradientButton
        title={faveIds.includes(id) ? 'Remove from Faves' : 'Add to Faves'}
        handlePress={() => {
          faveIds.includes(id) ? removeFaveId(id) : setFaveId(id);
        }}
      />
    </ScrollView>
  );
};

Session.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    speaker: PropTypes.object.isRequired
  }).isRequired,

  navigation: PropTypes.object.isRequired,
  setFaveId: PropTypes.func.isRequired,
  removeFaveId: PropTypes.func.isRequired
};

export default withNavigation(Session);

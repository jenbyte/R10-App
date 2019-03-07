import React, { Component } from 'react';
import Speaker from './Speaker';
import { Header } from '../../config/styles';
import PropTypes from 'prop-types';

class SpeakerContainer extends Component {
  static navigationOptions = {
    title: 'Session',
    headerTintColor: '#fff',
    headerTitleStyle: { ...Header }
  };

  render() {
    const speaker = this.props.navigation.getParam('speaker');
    console.log(speaker);
    return <Speaker speaker={speaker} navigation={this.props.navigation} />;
  }
}

SpeakerContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default SpeakerContainer;

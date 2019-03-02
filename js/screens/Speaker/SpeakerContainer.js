import React, { Component } from 'react';
import Speaker from './Speaker';
import { Header } from '../../config/styles';

export default class SpeakerContainer extends Component {
  static navigationOptions = {
    title: 'Session',
    headerTintColor: '#fff',
    headerTitleStyle: { ...Header }
  };

  render() {
    const speaker = this.props.navigation.getParam('speaker');

    return <Speaker speaker={speaker} navigation={this.props.navigation} />;
  }
}

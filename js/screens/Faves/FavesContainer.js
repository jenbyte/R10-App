import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../config/styles';
import { FavesContext } from '../../context';

export default class FavesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'Faves',
    headerTintColor: '#fff',
    headerTitleStyle: { ...Header }
  };

  render() {
    return (
      <FavesContext.Consumer>
        <View>
          <Text> Faves! </Text>
        </View>
      </FavesContext.Consumer>
    );
  }
}

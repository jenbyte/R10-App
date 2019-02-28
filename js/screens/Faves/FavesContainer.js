import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../config/styles';
import FavesContext from '../../context';
import Faves from './Faves';

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
        {({ faveIds }) => {
          console.log(faveIds);
          <View>
            <Faves navigation={this.props.navigation} faveIds={faveIds} />
          </View>;
        }}
      </FavesContext.Consumer>
    );
  }
}

import React, { Component } from 'react';
import Session from './Session';
import { ActivityIndicator, Text, View } from 'react-native';
import { Header } from '../../config/styles';
import FavesContext from '../../context';

export default class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session',
    headerTintColor: '#fff',
    headerTitleStyle: { ...Header }
  };

  render() {
    const session = this.props.navigation.getParam('session');

    return (
      <FavesContext.Consumer>
        {({ faveIds, setFaveId, removeFaveId }) => (
          <Session
            faveIds={faveIds}
            navigation={this.props.navigation}
            data={session}
          />
        )}
      </FavesContext.Consumer>

      // <View>
      //   <Session data={session} navigation={this.props.navigation} />
      // </View>
    );
  }
}

import React, { Component } from 'react';
import Session from './Session';
import { Header } from '../../config/styles';
import FavesContext from '../../context';
import PropTypes from 'prop-types';

class SessionContainer extends Component {
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
            setFaveId={setFaveId}
            removeFaveId={removeFaveId}
            navigation={this.props.navigation}
            data={session}
          />
        )}
      </FavesContext.Consumer>
    );
  }
}

SessionContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default SessionContainer;

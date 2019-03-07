import React, { Component } from 'react';
import Session from './Session';
import { Header } from '../../config/styles';
import FavesContext from '../../context';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ActivityIndicator, Text } from 'react-native';

class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session',
    headerTintColor: '#fff',
    headerTitleStyle: { ...Header }
  };

  render() {
    const id = this.props.navigation.getParam('id');

    return (
      <Query
        variables={{ id: id }}
        query={gql`
          query allSpeakers($id: ID) {
            allSpeakers(filter: { id: $id }) {
              id
              bio
              name
              image
              url
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          console.log(data, '#####');
          if (loading)
            return (
              <ActivityIndicator size="large" style={{ height: '100%' }} />
            );
          if (error) return <Text>{`Error! ${error.message}`}</Text>;
          console.log('ERROR:', error);

          return (
            <FavesContext.Consumer>
              {({ faveIds, setFaveId, removeFaveId }) => (
                <Session
                  faveIds={faveIds}
                  setFaveId={setFaveId}
                  removeFaveId={removeFaveId}
                  navigation={this.props.navigation}
                  speaker={data.allSpeakers[0]}
                  item={this.props.navigation.getParam('item')}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

SessionContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default SessionContainer;

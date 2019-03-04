import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Schedule from './Schedule';
import { formatSessionData } from '../../lib/helpers/dataFormatHelpers';
import { ActivityIndicator, Text } from 'react-native';
import { Header } from '../../config/styles';
import FavesContext from '../../context';
import PropTypes from 'prop-types';

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule',
    headerTintColor: '#fff',
    headerTitleStyle: { ...Header }
  };

  render() {
    return (
      <Query
        query={gql`
          {
            allSessions {
              id
              title
              startTime
              location
              description

              speaker {
                id
                image
                name
                url
                bio
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <ActivityIndicator size="large" style={{ height: '100%' }} />
            );
          if (error) return <Text>{`Error! ${error.message}`}</Text>;
          console.log(error);

          return (
            <FavesContext.Consumer>
              {({ faveIds }) => {
                return (
                  <Schedule
                    faveIds={faveIds}
                    data={formatSessionData(data.allSessions)}
                    navigation={this.props.navigation}
                  />
                );
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

ScheduleContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ScheduleContainer;

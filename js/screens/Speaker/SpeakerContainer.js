import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Speaker from './Speaker';
import { formatSessionData } from '../../lib/helpers/dataFormatHelpers';
import { ActivityIndicator, Text } from 'react-native';

export default class SpeakerContainer extends Component {
  render() {
    return (
      <Query
        query={gql`
          {
            allSpeakers {
              speaker {
                bio
                id
                image
                name
                url
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>{`Error! ${error.message}`}</Text>;
          console.log(error);
          return <Speaker data={formatSessionData(data.allSpeakers)} />;
        }}
      </Query>
    );
  }
}

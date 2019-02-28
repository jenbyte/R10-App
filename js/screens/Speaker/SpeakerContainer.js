import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Speaker from './Speaker';
import { ActivityIndicator, Text } from 'react-native';

export default class SpeakerContainer extends Component {
  render() {
    const speaker = this.props.navigation.getParam('speaker');

    return <Speaker speaker={speaker} navigation={this.props.navigation} />;
  }
}

// <Query
//   query={gql`
//     {
//       allSpeakers {
//         bio
//         id
//         image
//         name
//         url
//       }
//     }
//   `}
// >
//   {({ loading, error, data }) => {
//     if (loading) return <ActivityIndicator />;
//     if (error) return <Text>{`Error! ${error.message}`}</Text>;
//     console.log(error);
//     console.log('+++++++++++', data.allSpeakers);
// return (

// );
// }}
// </Query>

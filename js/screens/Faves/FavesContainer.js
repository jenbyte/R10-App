import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ActivityIndicator, Platform, View, Text } from 'react-native';
import { Header, Colors, Font } from '../../config/styles';
import { formatSessionData } from '../../lib/helpers/dataFormatHelpers';
import FavesContext from '../../context';
import Faves from './Faves';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../Speaker/styles';

export default class FavesContainer extends Component {
  static navigationOptions = {
    title: 'Faves',
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
          console.log('ERROR:', error);

          return (
            <FavesContext.Consumer>
              {({ faveIds }) => {
                const filteredSessions = data.allSessions.filter(event => {
                  return faveIds.includes(event.id);
                });

                {
                  if (filteredSessions.length === 0) {
                    return (
                      <View style={styles.noFave}>
                        <Text
                          style={{
                            fontFamily: Font.reg,
                            fontSize: 20,
                            textAlign: 'center',
                            paddingTop: 150
                          }}
                        >
                          No favourites added yet
                        </Text>
                      </View>
                    );
                  } else {
                    return (
                      <Faves
                        sessions={formatSessionData(filteredSessions)}
                        faveIds={faveIds}
                      />
                    );
                  }
                }
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList, Image } from 'react-native';
import styles from './styles';
import Collapsible from '../../components/Collapsible';
import PropTypes from 'prop-types';
import { Divider } from '../../config/styles';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={styles.logo}
            source={require('../../assets/images/r10_logo.png')}
          />

          <View style={styles.divider} />

          <Text style={styles.description}>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </Text>
          <Text style={styles.title}>Date &amp; Venue</Text>
          <Text style={styles.description}>
            The R10 conference will take place on Tuesday, June 27, 2019 in
            Vancouver, BC.
          </Text>

          <Text style={styles.title}>Code of Conduct</Text>
          <FlatList
            data={this.props.data.allConducts}
            renderItem={({ item }) => {
              return <Collapsible item={item} />;
            }}
            keyExtractor={item => item.id}
          />

          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#999',
              marginTop: 10
            }}
          />

          <Text style={styles.copyright}>
            &copy; Jennifer Yiu, RED Academy 2019
          </Text>
        </ScrollView>
      </View>
    );
  }
}

About.propTypes = {
  data: PropTypes.object.isRequired
};

export default About;

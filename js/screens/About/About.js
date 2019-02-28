import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList, Image } from 'react-native';
import styles from './styles';

class About extends Component {
  render() {
    console.log(this.props.data.allConducts);
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
              return (
                <View style={styles.flatList}>
                  <Text style={styles.listTitle}>{item.title} </Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />
          <View style={styles.divider} />
          <Text style={styles.copyright}>
            &copy; Jennifer Yiu, RED Academy 2019
          </Text>
        </ScrollView>
      </View>
    );
  }
}
export default About;

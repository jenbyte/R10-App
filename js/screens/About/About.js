import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
  LayoutAnimation,
  UIManager,
  TouchableOpacity,
  Platform
} from 'react-native';
import styles from './styles';
import { Colors } from '../../config/styles';

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  toggle = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { item } = this.props;
    return (
      <View style={styles.flatList}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => this.toggle()}>
          {this.state.isOpen ? (
            <View>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    paddingRight: 15,
                    color: Colors.purple,
                    fontWeight: 'bold'
                  }}
                >
                  &#8722;
                </Text>
                <Text style={styles.listTitle}>{item.title}</Text>
              </View>

              <Text style={styles.description}>{item.description}</Text>
            </View>
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{
                  paddingRight: 15,
                  color: Colors.purple,
                  fontWeight: 'bold'
                }}
              >
                &#x002B;
              </Text>
              <Text style={styles.listTitle}>{item.title}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

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

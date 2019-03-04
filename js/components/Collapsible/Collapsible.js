import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  LayoutAnimation,
  UIManager,
  TouchableOpacity,
  Platform
} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      rotateValue: new Animated.Value(0.01)
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  animateSpin = () => {
    this.state.rotateValue.setValue(0);
    Animated.timing(this.state.rotateValue, {
      duration: 600,
      toValue: 1
    }).start();
  };

  toggle = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isOpen: !this.state.isOpen });
    this.animateSpin();
  };

  render() {
    const { item } = this.props;
    const rotateIcon = this.state.rotateValue.interpolate({
      inputRange: ['0', '1'],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={{}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            this.toggle();
          }}
        >
          {this.state.isOpen ? (
            <View>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Animated.View
                    style={{ transform: [{ rotate: rotateIcon }] }}
                  >
                    <Ionicons
                      name={Platform.select({
                        ios: 'ios-remove',
                        android: 'md-remove'
                      })}
                      style={styles.bullet}
                      size={20}
                    />
                  </Animated.View>
                </View>
                <Text style={styles.listTitle}>{item.title}</Text>
              </View>

              <Text style={styles.description}>{item.description}</Text>
            </View>
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
                  <Ionicons
                    name={Platform.select({
                      ios: 'ios-add',
                      android: 'md-add'
                    })}
                    style={styles.bullet}
                    size={20}
                  />
                </Animated.View>
              </View>
              <Text style={styles.listTitle}>{item.title}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

Collapsible.propTypes = {
  item: PropTypes.object.isRequired
};

export default Collapsible;

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const GradientHeader = props => (
  <View style={{ overflow: 'hidden' }}>
    <LinearGradient
      colors={['#cf392a', '#9963ea']}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 100, width: '100%' }]}
    />
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerLeft: () => (
    <Ionicons
      name={'md-menu'}
      size={30}
      color={'white'}
      style={{ marginLeft: 20, marginTop: 10, marginBottom: 6 }}
      onPress={() => navigation.toggleDrawer()}
    />
  ),
  headerStyle: {
    backgroundColor: 'transparent'
  }
});

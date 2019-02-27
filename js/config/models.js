import { AsyncStorage } from 'react-native';

// use faveId to identify each faved item
export const setFave = async faveId => {
  try {
    await AsyncStorage.setItem(`${faveId}`, '');
    //put in dynamic string `` so key is always unique
  } catch (error) {
    console.log(error);
  }
};

import { AsyncStorage } from 'react-native';

// use faveId to identify each faved item
export const setFave = async faveId => {
  try {
    await AsyncStorage.setItem(
      `${faveId}`, //put in dynamic string `` so key is always unique
      JSON.stringify({ id: faveId, faveOn: new Date() })
      // second argument needs to be a *string*, set the id and time
    );
  } catch (error) {
    console.log(error);
  }
};

export const getFaves = async () => {
  try {
    // bc we're using 'await', don't need callback fn
    // instead, save fn by storing it in a variable
    const faveKeys = await AsyncStorage.getAllKeys();
    //multiGet() is a database call. Resolve promise with 'await'
    return await AsyncStorage.multiGet(faveKeys);
  } catch (error) {
    console.log(error);
  }
};

export const removeFave = async faveId => {
  try {
    await AsyncStorage.removeItem(`${faveId}`);
  } catch (error) {
    console.log(error);
  }
};

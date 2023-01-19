import AsyncStorage from '@react-native-async-storage/async-storage';

const storeYashBoardUrl = async (url: string) => {
  try {
    await AsyncStorage.setItem('@yashboard_url', url);
  } catch (e) {
    console.error('Error saving Yashboard URL', e);
  }
};

const getYashBoardUrl = async () => {
  try {
    const value = await AsyncStorage.getItem('@yashboard_url');
    return value;
  } catch (e) {
    console.error('Error getting Yashboard URL', e);
    return null;
  }
};

const clearSettings = async () => {
  try {
    await AsyncStorage.removeItem('@yashboard_url');
    console.debug('Cleared settings');
  } catch (e) {
    console.error('Error clearing settings', e);
  }
};

export {storeYashBoardUrl, getYashBoardUrl, clearSettings};

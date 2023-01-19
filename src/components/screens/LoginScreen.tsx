import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import FormStyle from '../../styles/FormStyle';
import {Button} from '../buttons/Button';
import TextField from '../inputs/TextField';
import {storeYashBoardUrl} from '../../data/Local';
import {GetStatus} from '../../data/YashBoard';
import {useNavigation} from '@react-navigation/native';
import {useAppSettingsContext} from '../../contexts/AppSettingsContext';

type Nav = {
  navigate: (value: string) => void;
};

const LoginScreen: React.FC = () => {
  const [url, setUrl] = useState('');
  const navigation = useNavigation<Nav>();
  const {setYashoardUrl} = useAppSettingsContext();

  const errorAlert = (message: string) =>
    Alert.alert('Error', message, [
      {
        text: 'OK',
        onPress: () => console.debug('Login Error Alert Closed'),
      },
    ]);

  const handleSubmit = async () => {
    if (!url) {
      console.debug('No URL provided');
      errorAlert('URL is required.');
      return;
    }

    try {
      const status = await GetStatus(url);
      if (!status.ok) {
        errorAlert('Invalid URL');
        return;
      }
      await storeYashBoardUrl(url);
      setYashoardUrl(url);
      console.debug('URL stored');
      navigation.navigate('Home');
    } catch (e) {
      errorAlert('Invalid URL');
      console.error('Error getting status', e);
    }
  };

  return (
    <View style={FormStyle.mainForm}>
      <TextField
        testID="url-input"
        value={url}
        placeholder="YaSHBoard URL"
        onChangeText={setUrl}
        label="YaSHBoard URL"
        required={true}
      />
      <Button
        testID="submit-button"
        title="Submit"
        onPress={async () => await handleSubmit()}
      />
    </View>
  );
};

export default LoginScreen;

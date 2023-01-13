import React, {useState} from 'react';
import {Alert, Button, View} from 'react-native';
import TextField from '../TextField';
import FormStyle from '../../styles/FormStyle';
import {AddApplication} from '../../data/AddApplication';

const AddApplicationScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [livenessUrl, setLiveNessUrl] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [keyParam, setKeyParam] = useState('');

  const errorAlert = (message: string) =>
    Alert.alert('Error', message, [
      {text: 'OK', onPress: () => console.log('Error Alert Closed')},
    ]);

  const successAlert = (message: string) =>
    Alert.alert('Success', message, [
      {text: 'OK', onPress: () => console.log('Success Alert Closed')},
    ]);

  const addApplication = () => {
    if (!name || !url) {
      errorAlert('Name and URL are required.');
      return;
    }
    const data = {
      name,
      url,
      livenessUrl,
      apiKey,
      keyParam,
    };
    AddApplication(data)
      .then(() => {
        setName('');
        setUrl('');
        setLiveNessUrl('');
        setApiKey('');
        setKeyParam('');
        successAlert('Application added successfully.');
      })
      .catch(error => {
        console.error(error);
        errorAlert('There was an error adding the application.');
      });
  };

  return (
    <View style={FormStyle.mainForm}>
      <TextField
        testID="name-input"
        value={name}
        placeholder="Name"
        onChangeText={setName}
        label="Name"
        required={true}
      />
      <TextField
        testID="url-input"
        value={url}
        placeholder="URL"
        onChangeText={setUrl}
        label="URL"
        required={true}
      />
      <TextField
        testID="liveness-url-input"
        value={livenessUrl}
        placeholder="Liveness URL"
        onChangeText={setLiveNessUrl}
        label="Liveness URL"
      />
      <TextField
        testID="api-key-input"
        value={apiKey}
        placeholder="API Key"
        onChangeText={setApiKey}
        label="API Key"
      />
      <TextField
        testID="key-param-input"
        value={keyParam}
        placeholder="Key Param"
        onChangeText={setKeyParam}
        label="Key Param"
      />
      <Button
        testID="submit-button"
        title="Submit"
        onPress={() => addApplication()}
      />
    </View>
  );
};

export default AddApplicationScreen;

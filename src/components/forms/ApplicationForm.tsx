import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {Application} from '../../models/Application';
import FormStyle from '../../styles/FormStyle';
import {Button} from '../buttons/Button';
import TextField from '../inputs/TextField';
import {useAppListUpdatedContext} from '../../contexts/AppListUpdateContext';

type Props = {
  application?: Application;
  submitData: Function;
};

const ApplicationForm: React.FC<Props> = props => {
  const {setAppListUpdated} = useAppListUpdatedContext();
  const {application, submitData} = props;
  const [name, setName] = useState(application ? application.name : '');
  const [url, setUrl] = useState(application ? application.url : '');
  const [livenessUrl, setLiveNessUrl] = useState(
    application ? application.livenessUrl : '',
  );
  const [apiKey, setApiKey] = useState(application ? application.apiKey : '');
  const [keyParam, setKeyParam] = useState(
    application ? application.keyParam : '',
  );

  const errorAlert = (message: string) =>
    Alert.alert('Error', message, [
      {
        text: 'OK',
        onPress: () =>
          console.debug('Add/Update Application Error Alert Closed'),
      },
    ]);

  const successAlert = (message: string) =>
    Alert.alert('Success', message, [
      {
        text: 'OK',
        onPress: () =>
          console.debug('Add/Update Application Success Alert Closed'),
      },
    ]);

  const handleSubmit = async () => {
    if (!name || !url) {
      errorAlert('Name and URL are required.');
      return;
    }
    const id = application ? application.id : undefined;
    const data = {
      id,
      name,
      url,
      livenessUrl,
      apiKey,
      keyParam,
    };

    try {
      await submitData(data);
      if (!application) {
        setName('');
        setUrl('');
        setLiveNessUrl('');
        setApiKey('');
        setKeyParam('');
      }
      successAlert('Application added/updated successfully.');
      setAppListUpdated(true);
    } catch (error) {
      console.error(error);
      errorAlert('There was an error adding/updating the application.');
    }
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
        onPress={async () => await handleSubmit()}
      />
    </View>
  );
};

export default ApplicationForm;

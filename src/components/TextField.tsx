import React from 'react';
import {View, Text, TextInput} from 'react-native';
import TextInputStyle from '../styles/TextInputStyle';

type Props = {
  testID: string;
  value: string;
  placeholder: string;
  label?: string;
  required?: boolean;
  onChangeText: (text: string) => void;
};

const TextField: React.FC<Props> = props => {
  const {testID, value, placeholder, onChangeText, label, required} = props;
  return (
    <View>
      <Text style={TextInputStyle.label}>{label}</Text>
      <TextInput
        testID={testID}
        value={value}
        style={TextInputStyle.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      {required && !value && (
        <Text testID={testID + '-required-error'} style={TextInputStyle.error}>
          Required
        </Text>
      )}
    </View>
  );
};

export default TextField;

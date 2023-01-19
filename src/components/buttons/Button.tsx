import * as React from 'react';
import {Pressable, Text} from 'react-native';
import ButtonStyle from '../../styles/ButtonStyle';
import {useNavigation} from '@react-navigation/native';

type Nav = {
  navigate: (value: string, rouateParams: any) => void;
};

type Props = {
  title: string;
  testID: string;
  routeParams?: any;
  screenName?: string;
  onPress: () => void;
  onLongPress?: () => void;
};

export const Button: React.FC<Props> = props => {
  const {title, testID, onPress} = props;
  return (
    <Pressable
      style={ButtonStyle.button}
      testID={testID}
      onPress={() => {
        onPress();
      }}>
      <Text style={ButtonStyle.buttonText}>{title}</Text>
    </Pressable>
  );
};

export const RightHeaderButton: React.FC<Props> = props => {
  const {title, testID, onPress, onLongPress} = props;
  return (
    <Pressable
      style={ButtonStyle.rightHeaderButton}
      testID={testID}
      onPress={() => {
        onPress();
      }}
      onLongPress={() => {
        onLongPress?.();
      }}>
      <Text style={ButtonStyle.rightHeaderButtonText}>{title}</Text>
    </Pressable>
  );
};

export const LeftHeaderButton: React.FC<Props> = props => {
  const {title, testID, onPress, onLongPress} = props;
  return (
    <Pressable
      style={ButtonStyle.leftHeaderButton}
      testID={testID}
      onPress={() => {
        onPress();
      }}
      onLongPress={() => {
        onLongPress?.();
      }}>
      <Text style={ButtonStyle.leftHeaderButtonText}>{title}</Text>
    </Pressable>
  );
};

export const GoToButton: React.FC<Props> = props => {
  const navigation = useNavigation<Nav>();
  const {screenName, title, onPress, routeParams, testID} = props;
  return (
    <Button
      testID={testID}
      title={title}
      onPress={() => {
        onPress();
        navigation.navigate(screenName ?? '', routeParams);
      }}
    />
  );
};

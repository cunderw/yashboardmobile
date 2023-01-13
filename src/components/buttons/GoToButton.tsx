import * as React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
type Nav = {
  navigate: (value: string) => void;
};

type Props = {
  screenName: string;
  title: string;
  onPress: () => void;
};

export const GoToButton: React.FC<Props> = props => {
  const navigation = useNavigation<Nav>();
  const {screenName, title, onPress} = props;
  return (
    <Button
      title={title}
      onPress={() => {
        onPress();
        navigation.navigate(screenName);
      }}
    />
  );
};

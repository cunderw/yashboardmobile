import * as React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type Nav = {
  navigate: (value: string, rouateParams: any) => void;
};

type Props = {
  screenName: string;
  title: string;
  onPress: () => void;
  routeParams: any;
};

export const GoToButton: React.FC<Props> = props => {
  const navigation = useNavigation<Nav>();
  const {screenName, title, onPress, routeParams} = props;
  return (
    <Button
      title={title}
      onPress={() => {
        onPress();
        navigation.navigate(screenName, routeParams);
      }}
    />
  );
};

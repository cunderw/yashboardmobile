import {RouteProp} from '@react-navigation/native';
import {Application} from './models/Application';

export type RootStackParamList = {
  Home: React.FC;
  AddApplication: React.FC;
  EditApplication: {application: Application} | undefined;
  AppView: {application: Application} | undefined;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

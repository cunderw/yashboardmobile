import {useRoute} from '@react-navigation/native';
import React from 'react';
import {WebView} from 'react-native-webview';
import {RootRouteProps} from '../../AppRoutes';

const AppViewScreen: React.FC = () => {
  const route = useRoute<RootRouteProps<'AppView'>>();
  return (
    <WebView
      source={{
        uri: route.params?.application.url || '',
      }}
      allowsBackForwardNavigationGestures={true}
    />
  );
};

export default AppViewScreen;

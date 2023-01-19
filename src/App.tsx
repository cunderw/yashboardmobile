import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {LeftHeaderButton, RightHeaderButton} from './components/buttons/Button';
import HomeScreen from './components/screens/HomeScreen';
import AddApplicationScreen from './components/screens/AddApplicationScreen';
import EditApplicationScreen from './components/screens/EditApplicationScreen';
import {AppListUpdatedProvider} from './contexts/AppListUpdateContext';
import {RootStackParamList} from './AppRoutes';
import AppViewScreen from './components/screens/AppViewScreen';
import LoginScreen from './components/screens/LoginScreen';
import {clearSettings, getYashBoardUrl} from './data/Local';
import {View} from 'react-native';
import {AppSettingsProvider} from './contexts/AppSettingsContext';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const checkUrlAndSetNavigation = async () => {
      try {
        const yashboardUrl = await getYashBoardUrl();
        if (yashboardUrl !== null && yashboardUrl !== '') {
          console.debug('URL found, going to home screen');
          setInitialRoute('Home');
        } else {
          console.debug('No URL found, going to settings screen');
          setInitialRoute('Login');
        }
      } catch (error) {
        console.error('Error Checking URL', error);
        setInitialRoute('Login');
      }
    };
    checkUrlAndSetNavigation();
  }, []);

  return initialRoute !== null ? (
    <AppSettingsProvider>
      <AppListUpdatedProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={initialRoute as 'Login' | 'Home'}>
            <Stack.Screen
              name="Home"
              options={({navigation}) => ({
                title: 'Home',
                headerStyle: {
                  backgroundColor: '#273469',
                },
                headerTintColor: '#EBF2FA',
                headerTitleAlign: 'center',
                headerRight: () => (
                  <RightHeaderButton
                    testID="add-button"
                    onPress={() => navigation.navigate('AddApplication')}
                    title="Add"
                  />
                ),
                headerLeft: () => (
                  <LeftHeaderButton
                    testID="logout-button"
                    onPress={async () => {
                      await clearSettings();
                      navigation.navigate('Login');
                    }}
                    title="Logout"
                  />
                ),
              })}>
              {_props => <HomeScreen />}
            </Stack.Screen>
            <Stack.Screen
              name="AddApplication"
              options={() => ({
                title: 'Add',
                headerStyle: {
                  backgroundColor: '#273469',
                },
                headerTintColor: '#EBF2FA',
              })}>
              {_props => <AddApplicationScreen />}
            </Stack.Screen>
            <Stack.Screen
              name="EditApplication"
              options={() => ({
                title: 'Edit',
                headerStyle: {
                  backgroundColor: '#273469',
                },
                headerTintColor: '#EBF2FA',
              })}
              initialParams={{application: undefined}}>
              {_props => <EditApplicationScreen />}
            </Stack.Screen>
            <Stack.Screen
              name="Login"
              options={() => ({
                title: 'Login',
                headerStyle: {
                  backgroundColor: '#273469',
                },
                headerTintColor: '#EBF2FA',
              })}>
              {_props => <LoginScreen />}
            </Stack.Screen>
            <Stack.Screen
              name="AppView"
              options={({route}) => ({
                title: route.params?.application.name || '',
                headerStyle: {
                  backgroundColor: '#273469',
                },
                headerTintColor: '#EBF2FA',
              })}
              initialParams={{application: undefined}}>
              {_props => <AppViewScreen />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </AppListUpdatedProvider>
    </AppSettingsProvider>
  ) : (
    <View />
  );
};

export default App;

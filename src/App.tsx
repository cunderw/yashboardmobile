import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RightHeaderButton} from './components/buttons/Button';
import HomeScreen from './components/screens/HomeScreen';
import AddApplicationScreen from './components/screens/AddApplicationScreen';
import EditApplicationScreen from './components/screens/EditApplicationScreen';
import {AppListUpdatedProvider} from './contexts/AppListUpdateContext';
import {RootStackParamList} from './AppRoutes';
import AppViewScreen from './components/screens/AppViewScreen';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <AppListUpdatedProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={({navigation}) => ({
              title: 'Home',
              headerStyle: {
                backgroundColor: '#273469',
              },
              headerTintColor: '#EBF2FA',
              headerRight: () => (
                <RightHeaderButton
                  testID="add-button"
                  onPress={() => navigation.navigate('AddApplication')}
                  title="Add"
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
  );
};

export default App;

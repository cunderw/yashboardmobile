import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button} from 'react-native';
import HomeScreen from './components/screens/HomeScreen';
import AddApplicationScreen from './components/screens/AddApplicationScreen';
import EditApplicationScreen from './components/screens/EditApplicationScreen';
import {RootStackParamList} from './AppRoutes';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const [hasAppListUpdated, setHasAppListUpdated] = useState(false);

  return (
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
              <Button
                onPress={() => navigation.navigate('AddApplication')}
                title="Add"
                color="#EBF2FA"
              />
            ),
          })}>
          {props => (
            <HomeScreen
              {...props}
              hasAppListUpdated={hasAppListUpdated}
              setHasAppListUpdated={setHasAppListUpdated}
            />
          )}
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
          {props => (
            <AddApplicationScreen
              {...props}
              setHasAppListUpdated={setHasAppListUpdated}
            />
          )}
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
          {props => (
            <EditApplicationScreen
              {...props}
              setHasAppListUpdated={setHasAppListUpdated}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

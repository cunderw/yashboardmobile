import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button} from 'react-native';
import HomeScreen from './components/screens/HomeScreen';
import AddApplicationScreen from './components/screens/AddApplicationScreen';
import EditApplicationScreen from './components/screens/EditApplicationScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [hasAppListUpdated, setHasAppListUpdated] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
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
        <Stack.Screen name="AddApplication">
          {props => (
            <AddApplicationScreen
              {...props}
              setHasAppListUpdated={setHasAppListUpdated}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="EditApplication">
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

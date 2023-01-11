import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {Button} from 'react-native'
import HomeScreen from './components/screens/HomeScreen'
import AddApplicationScreen from './components/screens/AddApplicationScreen'

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={({navigation}) => ({
            title: 'Home',
            headerStyle: {
              backgroundColor: '#273469',
            },
            headerTintColor: '#EBF2FA',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Add')}
                title="Add"
                color="#EBF2FA"
              />
            ),
          })}
        />
        <Stack.Screen name="Add" component={AddApplicationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

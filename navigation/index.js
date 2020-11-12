import React from 'react';
import {View, StatusBar, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import {colors} from '../constants/theme';

const Stack = createStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.green,
          },
          headerTintColor: '#fff',
          headerTitleContainerStyle:{
            justifyContent:'center',
            alignItems:'center',
          }
        }}>
        <Stack.Screen key="home" name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;

import React from 'react';
import RegisterScreen from '../screens/Login/RegisterScreen';
import Dashboard from '../screens/dashboard/Dashboard';
import DetailScreen from '../screens/Details/DetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import LoginScreen from '../screens/Login/LoginScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const isLoggedIn = useSelector(s => s.logIn.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{title: 'Dashboard', headerShown: false}}
            name="Dashboard"
            component={Dashboard}
          />
          <Stack.Screen
            options={{title: 'DetailScreen', headerShown: false}}
            name="DetailScreen"
            component={DetailScreen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{title: 'Connexion', headerShown: false}}
            name="Connexion"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{title: '', headerShown: true}}
            name="Register"
            component={RegisterScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;

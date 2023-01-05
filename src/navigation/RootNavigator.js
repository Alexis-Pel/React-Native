import React, {useState} from 'react';
import RegisterScreen from '../screens/RegisterScreen';
import Dashboard from '../screens/Dashboard';
import DetailScreen from '../screens/Details/DetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import LoginScreen from '../screens/Login/LoginScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const isLoggedIn = useSelector(s => s.logIn.isLoggedIn);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{title: 'Dashboard', headerShown: false}}
            name="Dashboard"
            component={Dashboard}
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
          <Stack.Screen
            options={{title: 'Dashboard', headerShown: false}}
            name="Dashboard"
            component={Dashboard}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;

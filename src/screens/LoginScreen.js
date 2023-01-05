import React, {Fragment, useCallback, useEffect, useMemo, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from './RegisterScreen';

// Initialisation Navigator
const Stack = createNativeStackNavigator();

// Main fonction of LoginScreen
const LoginScreen = props => {

    const {navigation} = props;

    // Definition of states
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');

    // Check with password and login exist
    const validateForm = useCallback(() => {
        if (pseudo === 'Alexis' && password === '1234' ){
            navigation.navigate('Register');
        }else{
            Alert.alert('Mot de passe ou pseudo invalide')
        }
    },[pseudo,password]);

    const registerIsValide = useCallback(() => {
        navigation.navigate('Register');
    });

    // Display LoginScreen page <Stack.Screen name="Home" component={HomeScreen}/>
    return (
        <SafeAreaView>
            <Stack.Navigator>
                <Stack.Screen options={{title: 'Register', headerShown: false}} name="Register" component={RegisterScreen}/>
            </Stack.Navigator>
            <ScrollView>
                <TextInput
                    placeholder="Pseudo"
                    value={pseudo}
                    onChangeText={setPseudo}
                />
                <TextInput
                    placeholder="Mot de passe"
                    value={password}
                    onChangeText={setPassword}
                />
                <Fragment>
                    <TouchableOpacity onPress={validateForm}>
                        <Text>Connexion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={registerIsValide}>
                        <Text>Inscription</Text>
                    </TouchableOpacity>
                </Fragment>
            </ScrollView>
        </SafeAreaView>
      );
};

const styles = StyleSheet.create({

});
export default LoginScreen;
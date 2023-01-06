import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
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
import {getData} from '../../helpers/StorageHelper';
import styles from './LoginStyles.js';

// Initialisation Navigator
const Stack = createNativeStackNavigator();

// Main fonction of LoginScreen
const LoginScreen = props => {
  const {navigation} = props;

  // Definition of states
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');

  // Check with password and login exist
  const validateForm = useCallback(async () => {
    const user = await getData('user');

    if (pseudo === user.username && password === user.password) {
      navigation.navigate('Dashboard');
    } else {
      if (pseudo === user.username) {
        Alert.alert('Mot de passe invalide');
      } else {
        if (password === user.password) {
          Alert.alert('Pseudo invalide');
        } else {
          Alert.alert('Il manque un mot de passe ou un pseudo');
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pseudo, password]);

  const registerIsValide = useCallback(() => {
    navigation.navigate('Register');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Display LoginScreen page <Stack.Screen name="Home" component={HomeScreen}/>
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.scrollViewInputs}>
          <TextInput
            style={styles.inputText}
            placeholder="Pseudo"
            value={pseudo}
            onChangeText={setPseudo}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.fragment}>
          <TouchableOpacity onPress={validateForm} style={styles.sendStyle}>
            <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={registerIsValide} style={styles.sendStyle}>
            <Text style={styles.buttonText}>Inscription</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

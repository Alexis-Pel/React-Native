import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {getData} from '../../helpers/StorageHelper';
import styles from './LoginStyles.js';
import {useDispatch} from 'react-redux';
import {actions as loginActions} from '../../redux/reducers/logInReducer';

// Main fonction of LoginScreen
const LoginScreen = props => {
  const {navigation} = props;

  // Definition of states
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');

  // Redux
  const dispatch = useDispatch();
  const logInRedux = useCallback(() => {
    dispatch(loginActions.logIn());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Check with password and login exist
  const validateForm = useCallback(async () => {
    const user = await getData('user');

    if (pseudo === user.username && password === user.password) {
      logInRedux();
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
            placeholderTextColor="white"
            style={styles.inputText}
            placeholder="Pseudo"
            value={pseudo}
            onChangeText={setPseudo}
          />
          <TextInput
            placeholderTextColor="white"
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

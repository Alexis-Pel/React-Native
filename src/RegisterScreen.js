/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {getData, storeData} from '../StorageHelper';
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

// Register Successful
const onPress = (firstName, lastName, password) =>
  Alert.alert(
    'Inscription effectuée',
    `Bonjour ${firstName} ${lastName}, votre mot de passe est ${password}`,
    {
      text: 'OK',
    },
  );

/**
 * Register Screen Component
 * @returns {JSX.Element}
 * @constructor
 */

const RegisterScreen = () => {
  //Definition of states
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  let firstlaunch = true;

  // password Validation
  useEffect(() => {
    if (!firstlaunch) {
      if (password.length >= 3) {
        setPasswordIsValid(true);
      } else {
        setPasswordIsValid(false);
      }
    } else {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      firstlaunch = false;
    }
  }, [password]);

  // confirmpassword validation useMemo
  const confirmPasswordIsValid = useMemo(() => {
    return passwordIsValid && password === confirmPassword;
  }, [confirmPassword, password, passwordIsValid]);

  // Form validation callback
  const validateForm = useCallback(async () => {
    if (
      passwordIsValid &&
      confirmPasswordIsValid &&
      firstname.length > 1 &&
      lastname.length > 1
    ) {
      await storeData(
        {
          firstname: firstname,
          lastname: lastname,
          password: password,
        },
        'user',
      ),
        onPress(firstname, lastname, password);
    }
  }, [passwordIsValid, confirmPasswordIsValid, firstname, lastname, password]);

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={{fontWeight: 'bold', fontSize: 25, alignSelf: 'center'}}>
        Inscription
      </Text>

      <Image
        style={styles.profilePicture}
        source={{
          uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FProfile-Avatar-PNG.png&f=1&nofb=1&ipt=54410382c540772fe9f2500d35d85ff329758c284d9ae3ec37f33edd083c4233&ipo=images',
        }}
      />
      <TouchableOpacity
        onPress={async () => console.log(await getData('user'))}>
        <Text>GETDATA</Text>
      </TouchableOpacity>

      <ScrollView style={{flex: 1, alignSelf: 'center'}}>
        <TextInput
          style={styles.inputText}
          placeholder="Prénom"
          value={firstname}
          //onEndEditing={setFirstname}
          onChangeText={setFirstname}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Nom"
          value={lastname}
          onChangeText={setLastname}
        />
        <TextInput
          style={passwordIsValid ? styles.inputText : styles.passwordIsNotValid}
          secureTextEntry={true}
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={
            confirmPasswordIsValid
              ? styles.inputText
              : styles.passwordIsNotValid
          }
          secureTextEntry={true}
          placeholder="Confirmation du mot de passe"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <View style={{alignSelf: 'center', marginTop: 20}}>
          <TouchableOpacity style={styles.sendStyle} onPress={validateForm}>
            <Text style={{color: 'darkgray'}}>Envoyer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  passwordIsValid: {},
  passwordIsNotValid: {
    backgroundColor: 'gainsboro',
    paddingStart: 15,
    height: 50,
    width: 350,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 35,
    borderColor: 'red',
  },
  sendStyle: {
    borderColor: 'darkgray',
    borderWidth: 1,
    borderRadius: 40,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    backgroundColor: 'gainsboro',
    paddingStart: 15,
    height: 50,
    width: 350,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 35,
    borderColor: 'darkgray',
  },
  profilePicture: {
    marginTop: 20,
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 100,
  },

  square: {
    //flex: 0.1,
    backgroundColor: 'yellow',
    height: 50,
    width: 50,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 3,
  },
});

export default RegisterScreen;

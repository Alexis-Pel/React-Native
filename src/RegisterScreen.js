/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
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

const RegisterScreen = () => {
  const onPress = () =>
    Alert.alert('Felicitation', 'Inscription enregistrée', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

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
      <ScrollView style={{flex: 1, alignSelf: 'center'}}>
        <TextInput style={styles.inputText} placeholder="Prénom" />
        <TextInput style={styles.inputText} placeholder="Nom" />
        <TextInput
          style={styles.inputText}
          secureTextEntry={true}
          placeholder="Mot de passe"
        />
        <TextInput
          style={styles.inputText}
          secureTextEntry={true}
          placeholder="Confirmation du mot de passe"
        />
        <View style={{alignSelf: 'center', marginTop: 20}}>
          <TouchableOpacity style={styles.sendStyle} onPress={onPress}>
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

import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {storeData} from '../../helpers/StorageHelper';
import {
  SafeAreaView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import styles from './RegisterStyles';
import ImagePicker from 'react-native-image-crop-picker';

// Register Successful
const onPress = username =>
  Alert.alert('Inscription effectuée', `Bienvenue, ${username}`, {
    text: 'OK',
  });

const RegisterScreen = () => {
  //Definition of states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [image, setImage] = useState(
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FProfile-Avatar-PNG.png&f=1&nofb=1&ipt=54410382c540772fe9f2500d35d85ff329758c284d9ae3ec37f33edd083c4233&ipo=images',
  );
  let firstlaunch = true;

  function upload(image) {
    setImage(image.sourceURL);
  }

  function handleError(e) {
    console.log(e);
  }

  const onPressImg = useCallback(() => {
    const options = {
      width: 500,
      height: 500,
      cropping: true,
      includeBase64: true,
    };
    ImagePicker.openPicker(options).then(upload).catch(handleError);
  }, []);

  // Password Validation
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

  // Confirm password validation useMemo
  const confirmPasswordIsValid = useMemo(() => {
    return passwordIsValid && password === confirmPassword;
  }, [confirmPassword, password, passwordIsValid]);

  // Form validation callback
  const validateForm = useCallback(async () => {
    if (passwordIsValid && confirmPasswordIsValid && username.length > 1) {
      await storeData(
        {
          username: username,
          password: password,
          image: image,
        },
        'user',
      ),
        onPress(username);
    }
  }, [passwordIsValid, confirmPasswordIsValid, username, password, image]);

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.inscriptionTetxt}>Inscription</Text>
      <TouchableOpacity onPress={onPressImg}>
        <Image
          style={styles.profilePicture}
          source={{
            uri: image,
          }}
          onPress={onPressImg}
        />
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        <TextInput
          style={[styles.inputText, styles.IsValid]}
          placeholder="Nom d'utilisateur"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={
            passwordIsValid
              ? [styles.inputText, styles.IsValid]
              : [styles.inputText, styles.passwordIsNotValid]
          }
          secureTextEntry={true}
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={
            confirmPasswordIsValid
              ? [styles.inputText, styles.IsValid]
              : [styles.inputText, styles.passwordIsNotValid]
          }
          secureTextEntry={true}
          placeholder="Confirmation du mot de passe"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.sendStyle} onPress={validateForm}>
          <Text style={styles.sendText}>Envoyer</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

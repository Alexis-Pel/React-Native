
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { deleteStorage, getData, storeData } from '../../helpers/StorageHelper';
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
 import styles from './ProfilStyles.js'


const ProfilScreen =  () => {

  const [pseudo, setPseudo] = useState();
  const [password, setPassword] = useState();
  const [image, setImage] = useState('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FProfile-Avatar-PNG.png&f=1&nofb=1&ipt=54410382c540772fe9f2500d35d85ff329758c284d9ae3ec37f33edd083c4233&ipo=images');
  const [isHide, setIsHide] = useState(true);

  const getUser = async () => {
    const user = await getData('user')
    if (!user){
      return;
    }
    setPseudo(user.username)
    setPassword(user.password)
    setImage(user.image)
  };

  const hideAndShowPassword = useCallback(() => {
    setIsHide(!isHide)
  });

  useEffect(() => {
    getUser()
  }, [])

  // Deconnect the user on remove
  const removeSession = useCallback(() => {
    deleteStorage('user');
  });

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.inputText}>{pseudo}</Text>
        <Image
          style={styles.profilePicture}
          source={{
            uri: image,
          }}
          onPress={onPressImg}
        />
        <View style={styles.view}>
          <Text style={styles.inputText}>{isHide ? password.replace(/./g, '*') : password}</Text>
          <TouchableOpacity onPress={hideAndShowPassword}>
            <Text style={styles.buttonHideShow}>👁️</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.inputText} onPress={removeSession}>
          <Text>Déconnecter</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilScreen;

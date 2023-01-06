import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'fff',
  },
  IsValid: {
    borderColor: 'darkgray',
  },
  passwordIsNotValid: {
    borderColor: 'red',
  },
  sendStyle: {
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50,
    borderColor: 'rgba(255, 164, 32, 1.0)',
    borderWidth: 1,
    borderRadius: 40,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 164, 32, 1.0)',
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 3,
  },
  inputText: {
    backgroundColor: 'gainsboro',
    paddingStart: 15,
    height: 50,
    width: 300,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 30,
  },
  profilePicture: {
    marginTop: 25,
    marginBottom: 30,
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

export default styles;

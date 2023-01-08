import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },

  scrollView: {
    flex: 0.5,
    marginTop: '30%',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
  },

  scrollViewInputs: {
    alignItems: 'center',
  },

  fragment: {
    flex: 0.5,
    flexDirection: 'row',
    marginTop: '10%',
    width: '100%',
  },

  IsValid: {
    borderColor: 'darkgray',
  },

  sendStyle: {
    alignSelf: 'center',
    borderColor: 'rgba(0, 150, 250, 0.5)',
    marginLeft: '9%',
    borderWidth: 1,
    borderRadius: 40,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 150, 150, 0.5)',
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 3,
  },

  inputText: {
    backgroundColor: '#8C8C8C',
    paddingStart: 15,
    height: 50,
    width: 300,
    borderRadius: 5,
    marginTop: 30,
    color: 'white',
  },

  buttonText: {
    color: 'white',
  },
});

export default styles;

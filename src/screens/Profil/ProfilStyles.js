import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: 'fff',
      marginTop: '45%',
    },
    scrollView: {
      flex: 0.5,
      flexDirection: 'column',
      alignSelf: 'center',
      width: '100%',
    },
    scrollViewInputs:{
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
    view: {
        flex: 0.1,
        flexDirection: "row",
    },
    buttonHideShow:{
        backgroundColor: 'gainsboro',
        paddingStart: 15,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 30,
        fontSize: 24
    },
    inputText: {
      backgroundColor: 'gainsboro',
      paddingStart: 15,
      width: 300,
      marginLeft: '9%',
      borderRadius: 5,
      borderWidth: 1,
      marginTop: 30,
      fontSize: 24
    },
    buttonText: {
      color: 'white',
    }
  });

  export default styles;
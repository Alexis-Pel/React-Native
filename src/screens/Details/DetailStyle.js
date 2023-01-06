import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'fff',
  },

  gameTitle: {
    paddingLeft: 15,
    color: 'white',
    fontWeight: '800',
    fontSize: 21,
    height: 100,
    width: 200,
    marginLeft: 23,
  },
  gamePicture: {
    marginBottom: 25,
    backgroundColor: 'blue',
    width: '100 %',
    resizeMode: 'cover',
    height: 200,
  },
  coverPicture: {
    marginBottom: 25,
    backgroundColor: 'blue',
    width: 150,
    resizeMode: 'cover',
    height: 200,
    borderRadius: 8,
  },
  summary: {
    margin: 10,
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
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
    textAlign: 'justify',
    fontSize: 11,
  },

  titleView: {
    flexDirection: 'row',
    zIndex: 10,
    marginTop: -100,
  },

  title: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  scoreView: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red',
    width: '80 %',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },

  ratingText: {
    fontWeight: '800',
    color: 'rgb(255,0,113)',
  },

  votesText: {
    fontWeight: '800',
    fontSize: 10,
    color: 'rgb(255,0,113)',
  },

  summaryView: {
    margin: 10,
  },

  summaryText: {
    fontWeight: '500',
    fontSize: 18,
  },
});

export default styles;

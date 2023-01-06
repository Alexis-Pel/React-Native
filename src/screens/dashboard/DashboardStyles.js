import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainSafeArea: {
    backgroundColor: '#D9D9D9',
    flex: 1,
  },

  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  mainTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FE0353',
  },

  searchView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  searchTextInput: {
    backgroundColor: '#8C8C8C',
    flex: 1,
    height: 25,
    margin: 10,
    borderRadius: 7,
    color: 'white',
  },

  searchOpacity: {
    backgroundColor: '#981EF7',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },

  touchableText: {
    color: 'white',
    fontSize: 16,
  },

  mainFlatList: {
    backgroundColor: '#D9D9D9',
    flex: 2,
  },
});

export default styles;

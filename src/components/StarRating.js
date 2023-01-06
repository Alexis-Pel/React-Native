import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import {getData, storeData} from '../helpers/StorageHelper';
const StarRating = props => {
  const [starRating, setStarRating] = useState(false);
  const [value, setValue] = useState(0);
  const {game_id} = props;

  async function setDict(value) {
    await storeData(value, 'rating_' + game_id);
  }

  async function getstarDict() {
    return await getData('rating_' + game_id);
  }

  useEffect(() => {
    getstarDict().then(r => starItem(r));
  }, []);

  function starItem(dict) {
    if (!dict) {
      setDict(0);
    } else {
      setValue(dict);
      setStarRating(true);
    }
  }
  function ratingCompleted(rating) {
    setDict(rating).then(setValue(rating));
    setStarRating(true);
    //await AsyncStorage.setItem('rating_'+game_id, rating);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.stars}>
          <Rating
            startingValue={value}
            ratingCount={10}
            showRating
            imageSize={35}
            onFinishRating={rating => ratingCompleted(rating)}
            readonly={starRating}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
  starUnselected: {
    color: 'grey',
  },
});

export default StarRating;

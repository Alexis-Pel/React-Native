import React, {useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {Rating} from 'react-native-ratings';
import {getData, storeData} from '../../helpers/StorageHelper';
import styles from './StarRatingStyles';

const StarRating = props => {
  const [starRating, setStarRating] = useState(false);
  const [value, setValue] = useState(0);
  const {game_id} = props;

  async function setDict() {
    await storeData(value, 'rating_' + game_id);
  }

  async function getstarDict() {
    return await getData('rating_' + game_id);
  }

  useEffect(() => {
    getstarDict().then(r => starItem(r));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }

  return (
    <SafeAreaView style={styles.safeArea}>
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

export default StarRating;

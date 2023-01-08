import React, {useEffect, useState} from 'react';
import styles from './DetailStyle';
import {SafeAreaView, View, Text, Image, ScrollView} from 'react-native';
import {getDataForDetail} from '../../apiTools/apiTools';
import StarRating from '../../components/starRating/StarRating';

const DetailScreen = ({navigation, route}) => {
  const {id} = route.params;
  const [game, setGame] = useState(null);

  useEffect(() => {
    if (game == null) {
      getDataForDetail(id.toString()).then(value => {
        setGame(value);
      });
    }
  }, [game, id]);

  try {
    return (
      <SafeAreaView style={styles.screen}>
        <ScrollView>
          <Image
            style={styles.gamePicture}
            source={{
              uri:
                'https://images.igdb.com/igdb/image/upload/t_screenshot_big/' +
                game.screenshots[
                  Math.floor(Math.random() * game.screenshots.length)
                ].image_id +
                '.jpg',
            }}
            blurRadius={8}
          />
          <View style={styles.imageView}>
            <Image
              style={styles.coverPicture}
              source={{
                uri:
                  'https://images.igdb.com/igdb/image/upload/t_cover_big/' +
                  game.cover.image_id +
                  '.png',
              }}
            />
            <View style={styles.titleView}>
              <Text style={styles.gameTitle} numberOfLines={5}>
                {game.name}
              </Text>
              <View style={styles.ratingText}>
                <Text style={styles.votesText}>
                  {game.total_rating.toFixed()} / 100
                </Text>
                <Text style={styles.votesText}>
                  {game.total_rating_count} votes
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.summaryView}>
            <Text style={styles.summaryText}>Synopsis: </Text>
            <Text style={styles.summary}>{game.summary}</Text>
          </View>
          <StarRating game_id={id} />
        </ScrollView>
      </SafeAreaView>
    );
  } catch (e) {
    return <SafeAreaView style={styles.screen} />;
  }
};

export default DetailScreen;

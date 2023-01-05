import React, {useEffect, useState} from 'react';
import styles from './DetailStyle';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {getDataForDetail} from '../../apiTools/apiTools';

const DetailScreen = props => {
  const game_id = 112875;
  const [game, setGame] = useState(null);

  useEffect(() => {
    if (game == null) {
      getDataForDetail(game_id.toString()).then(value => {
        setGame(value);
      });
    }
  }, [game]);

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
          <View style={{flexDirection: 'row', zIndex: 10, marginTop: -100}}>
            <Image
              style={styles.coverPicture}
              source={{
                uri:
                  'https://images.igdb.com/igdb/image/upload/t_cover_big/' +
                  game.cover.image_id +
                  '.png',
              }}
            />
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.gameTitle}>{game.name}</Text>
              <View
                style={{
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
                }}>
                <Text
                  style={{
                    fontWeight: '800',
                    color: 'rgb(255,0,113)',
                  }}>
                  {game.total_rating.toFixed()} / 100
                </Text>
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 10,
                    color: 'rgb(255,0,113)',
                  }}>
                  {game.total_rating_count} votes
                </Text>
              </View>
            </View>
          </View>
          <View style={{margin: 10}}>
            <Text style={{fontWeight: '500', fontSize: 18}}>Synopsis: </Text>
            <Text style={styles.summary}>{game.summary}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } catch (e) {
    return <SafeAreaView style={styles.screen} />;
  }
};

export default DetailScreen;

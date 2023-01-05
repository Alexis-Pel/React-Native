import React from 'react';
import styles from './DetailStyle';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
} from 'react-native';

const DetailScreen = game_id => {
  const game_name = 'God Of War Ragnarok';
  const uri =
    'https://images.igdb.com/igdb/image/upload/t_screenshot_big/scd720.jpg';
  const summary =
    "God of War: Ragnarök is the ninth installment in the God of War series and the sequel to 2018's God of War. Continuing with the Norse mythology theme, the game is set in ancient Norway and feature series protagonists Kratos, the former Greek God of War, and his young son Atreus. The game is expected to kick off the events of Ragnarök, where Kratos and Atreus must journey to each of the Nine Realms in search of answers as they prepare for the prophesied battle that will end the world.";
  const total_rating = 91;
  const total_rating_count = 578;
  const uri_cover =
    'https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.png';
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <Image
          style={styles.gamePicture}
          source={{
            uri: uri,
          }}
          blurRadius={10}
        />
        <View style={{flexDirection: 'row', zIndex: 10, marginTop: -100}}>
          <Image style={styles.coverPicture} source={{uri: uri_cover}} />
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.gameTitle}>{game_name}</Text>
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
                {total_rating} / 100
              </Text>
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 10,
                  color: 'rgb(255,0,113)',
                }}>
                {total_rating_count} votes
              </Text>
            </View>
          </View>
        </View>
        <View style={{margin: 10}}>
          <Text style={{fontWeight: '500', fontSize: 18}}>Synopsis: </Text>
          <Text style={styles.summary}>{summary}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

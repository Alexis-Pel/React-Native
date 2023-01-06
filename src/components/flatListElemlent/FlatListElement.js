import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './FlatListElementStyles';

const FlatListElement = ({navigation, item}) => {
  const openDetailScreen = useCallback(() => {
    navigation.navigation.navigate('DetailScreen', {id: item.id});
  }, [navigation, item.id]);

  return (
    <View style={styles.itemView}>
      <TouchableOpacity style={styles.touchableView} onPress={openDetailScreen}>
        <Text style={styles.titleText}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlatListElement;

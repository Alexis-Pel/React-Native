import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './FlatListElementStyles';

const FlatListElement = ({navigation, item}) => {
  console.log({item});

  const openDetailScreen = useCallback(() => {
    navigation.navigation.navigate('DetailScreen', {id: item.id});
  }, [navigation, item.id]);

  return (
    <View style={styles.itemView}>
      <TouchableOpacity onPress={openDetailScreen}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlatListElement;

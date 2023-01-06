import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const FlatListElement = ({navigation, item}) => {
  const openDetailScreen = useCallback(() => {
    navigation.navigation.navigate('DetailScreen', {id: item.id});
  }, [navigation, item.id]);

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={openDetailScreen}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#B27176',
    margin: 15,
    padding: 20,
  },
});

export default FlatListElement;

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const FlatListElement = ({item}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity>
        <Text>{item.id}</Text>
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

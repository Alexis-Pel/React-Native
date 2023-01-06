import {useEffect, useState, useMemo} from 'react';
import React, {
  FlatList,
  Alert,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FlatListElement from '../../components/flatListElemlent/FlatListElement';
import {
  getDataForDashboard,
  getSearchDataForDashboard,
} from '../../apiTools/apiTools';

import styles from './DashboardStyles';

const Dashboard = navigation => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const loadData = async () => {
    const responseData = await getDataForDashboard();
    setData(responseData);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item}) => {
    console.log(item);
    return <FlatListElement item={item} navigation={navigation} />;
  };

  const dataFilter = async () => {
    if (search === '') {
      loadData();
    }
    if (search !== '') {
      const searchDataResponse = await getSearchDataForDashboard(search);
      if (searchDataResponse.length >= 1) {
        setData(searchDataResponse);
      } else {
        Alert.alert("Votre recherche n'a pas produit de résultats", [
          {text: 'Fermer'},
        ]);
      }
    } else {
    }
  };

  return (
    <SafeAreaView style={styles.mainSafeArea}>
      <View style={styles.titleView}>
        <Text style={styles.mainTitle}>Dashboard</Text>
      </View>
      <View style={styles.searchView}>
        <TextInput style={styles.searchTextInput} onChangeText={setSearch} />
        <TouchableOpacity style={styles.searchOpacity} onPress={dataFilter}>
          <Text style={styles.touchableText}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.mainFlatList}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

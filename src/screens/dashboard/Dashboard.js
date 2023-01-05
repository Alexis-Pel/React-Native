import {useEffect, useState} from 'react';
import React, {FlatList, SafeAreaView, View, Text} from 'react-native';
import FlatListElement from '../../components/flatListElemlent/FlatListElement';
import {getDataForDashboard} from '../../apiTools/apiTools';

import styles from './DashboardStyles';

const Dashboard = () => {
  const [data, setData] = useState([]);

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
    return <FlatListElement item={item} />;
  };

  return (
    <SafeAreaView style={styles.mainSafeArea}>
      <View>
        <Text>Dashboard</Text>
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

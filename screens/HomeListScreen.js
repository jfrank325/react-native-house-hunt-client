import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import { FloatingAction } from 'react-native-floating-action';
import { useDispatch, useSelector } from 'react-redux';
import * as houseAction from '../redux/actions/houseAction';
const HomeListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { houses } = useSelector((state) => state.house);
  useEffect(() => {
    dispatch(houseAction.fetchHouses());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={houses}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Card navigation={navigation} house={item} />}
      />

      <FloatingAction
        position="right"
        animated={false}
        showBackground={false}
        onPressMain={() => navigation.navigate('AddHome')}
      />
    </View>
  );
};

export default HomeListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

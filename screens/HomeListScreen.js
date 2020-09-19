import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import { FloatingAction } from 'react-native-floating-action';
import { useDispatch } from 'react-redux';
import * as houseAction from '../redux/actions/houseAction';
const HomeListScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(houseAction.fetchHouses());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Card navigation={navigation} />
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

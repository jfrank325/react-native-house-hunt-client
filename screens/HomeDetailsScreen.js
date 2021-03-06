import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const HomeDetailsScreen = ({ route }) => {
  const { houseId } = route.params;
  const house = useSelector((state) => state.house.houses.find((house) => house._id === houseId));
  const { title, address, homeType, description, price, image, yearBuilt } = house;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View>
        <Image source={{ uri: image }} />
      </View>
      <View style={styles.group}>
        <Text style={styles.label}>Home Type: </Text>
        <Text style={styles.value}>{homeType}</Text>
      </View>
      <View style={styles.group}>
        <Text style={styles.label}>Price: </Text>
        <Text style={styles.value}>{price}</Text>
      </View>
      <View style={styles.group}>
        <Text style={styles.label}>Year Built: </Text>
        <Text style={styles.value}>{yearBuilt}</Text>
      </View>
      <View style={styles.group}>
        <Text style={styles.label}>Address: </Text>
        <Text style={styles.value}>{address}</Text>
      </View>
      <View style={styles.group}>
        <Text style={styles.label}>Description: </Text>
        <Text style={styles.value}>{description}</Text>
      </View>
    </ScrollView>
  );
};

export default HomeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  heading: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
  },
  image: {
    width: '100%',
    height: 200,
  },
  group: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    flexShrink: 1,
  },
});

import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Card = ({ navigation, house }) => {
  const { title, address, homeType, description, price, image, yearBuilt, _id } = house;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('HomeDetails', {
          houseId: _id,
        })
      }
    >
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title.length > 30 ? title.slice(0, 30) + '...' : title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <ImageBackground source={{ uri: image }} style={styles.image}>
            <Text style={styles.price}>{price}</Text>
            <View style={styles.year}>
              <Text style={styles.yearText}>{yearBuilt}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            {description.length > 100 ? description.slice(0, 100) + '...' : description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 5,
    height: 300,
    margin: 10,
  },
  titleContainer: {
    height: '15%',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  imageContainer: {
    width: '100%',
    height: '65%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 30,
    color: '#fff',
    margin: 10,
  },
  year: {
    margin: 10,
    backgroundColor: '#2652B0',
    height: 25,
    width: 80,
    borderRadius: 5,
  },
  yearText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    margin: 10,
  },
});

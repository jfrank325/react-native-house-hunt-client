import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const HomeDetailsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>Modern 3-bedroom flat</Text>
        </View>
      </View>{' '}
      <View>
        <Image source={'image'} />
      </View>
      <View style={styles.group}>
        <Text style={styles.label}>Home Type:</Text>
        <Text style={styles.value}>Flat</Text>
      </View>
      <View style={styles.group}>
        <Text style={styles.label}>Price:</Text>
        <Text style={styles.value}>200000</Text>
      </View>
      <View style={styles.group}>
        <Text style={styles.label}>Year Built:</Text>
        <Text style={styles.value}>2020</Text>
      </View>
      <View style={styles.group}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>This is the address</Text>
      </View>
      <View style={styles.group}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>This is the description</Text>
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

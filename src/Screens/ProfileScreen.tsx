import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Avatar } from 'react-native-paper';

import FontAwesome from'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  return (
    <ScrollView
        contentContainerStyle={{ 
          //height: '110%', 
          width: '100%', }}>

      <View style={styles.container}>
      
        <Image
            style={{ width: '100%', height: 200 }}
            source={{ uri: 'https://mlb.nbcsports.com/wp-content/uploads/sites/7/2017/04/flag1-e1492373781923.jpg'}}
        />
        <Avatar.Image
              source={{ uri: 'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg'}}
              size={100}
              style={styles.avatar}
        />

        <View style={styles.headerblock}>
          <View>
            <Text style={styles.name}>Vicky Voter</Text>
            <Text style={styles.subtext}>Citizen</Text>
          </View>
          <View style={styles.icon}>
            <FontAwesome
              name='institution'
              size={20}
              color='gold'
            />
          </View>
        </View> 

        <View style={styles.paragraphblock}>
          <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque aliquam arcu, id tristique lectus molestie id. Sed id pellentesque arcu. Aenean pharetra vehicula nisi, nec facilisis sapien varius ut. Sed non condimentum lectus.</Text>
        </View>

        <View style={styles.detailsblock}>
          <View style={styles.circle}>
            <Text style={styles.circletext}>0</Text>
          </View>
          <View style={styles.strip}>
            <Text style={styles.detailstext}>
              My Endorsements
            </Text>
          </View>
        </View>

        <View style={styles.detailsblock}>
          <View style={styles.circle}>
            <Text style={styles.circletext}>0</Text>
          </View>
          <View style={styles.strip}>
            <Text style={styles.detailstext}>
              My Questions
            </Text>
          </View>
        </View>

        <View style={styles.detailsblock}>
          <View style={styles.circle}>
            <Text style={styles.circletext}>0</Text>
          </View>
          <View style={styles.strip}>
            <Text style={styles.detailstext}>
              My Responses
            </Text>
          </View>
        </View>    

          <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  avatar: {
    position: 'absolute',
    top: 150,
    left: 30,
    elevation: 2,
  },
  headerblock: {
    paddingVertical: 4,
    paddingLeft: '40%',
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  paragraphblock:{
    padding: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 16,
    color: 'gray',
    padding: 2,
  },
  paragraph: {
    fontSize: 14,
  },
  icon: {
    justifyContent: 'center',
  },
  detailsblock: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: 'blue',
    borderWidth: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    elevation: 4,
  },
  strip: {
    height: 40,
    backgroundColor: 'gray',
    position: 'absolute',
    paddingHorizontal: 80,
    left: 30,
    borderRadius: 10,
    justifyContent: 'center',
    width: '95%',
  },
  circletext: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailstext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ProfileScreen;

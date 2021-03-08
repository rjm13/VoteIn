import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const ElectionBox = () => {
  return (
    <View style={styles.container}>

        <View style={styles.electionbox}>
          <View style={styles.electionblock}>
            <View style={styles.iconbox}>
              <Feather
                name='star'
                color='blue'
                size={30}
              />
            </View>
            
            <View style={styles.electiontextbox}>
              <Text style={styles.date}>
                March 20, 2022
              </Text>
              <Text style={styles.subtext}>
                Gubernational Election
              </Text>
            </View>
          </View>
          
          <View style={styles.iconbox}>
            <Text>
              85%
            </Text>
          </View>
          
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  block: {
    margin: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
  },
  subtext: {
    fontSize: 14,
    color: 'gray',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  electionbox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    elevation: 1,
  },
  electionblock: {
    flexDirection: 'row',
  },
  iconbox: {
    justifyContent: 'center',
    padding: 10,
  },
  electiontextbox: {
    justifyContent: 'center',
    paddingHorizontal: 10,

  },
});

export default ElectionBox;

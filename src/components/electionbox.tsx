import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

const ElectionBox = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => {navigation.navigate('Ballot') }}>
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
        </TouchableOpacity>
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

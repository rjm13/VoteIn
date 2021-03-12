import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import ElectionBox from '../components/electionbox';

const ElectionScreen = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.block}>
        <Text style={styles.title}>
          My Ballots
        </Text>
      </View>

      <ElectionBox />
      <ElectionBox />

      <View style={styles.block}>
        <Text style={styles.title}>
          Find Representitives
        </Text>
      </View>

      <View style={styles.row}>

        <View style={styles.square}>
          <View style={styles.icon}>
            <Feather
              name='triangle'
              color='red'
              size={30}
            />
          </View>
          <Text style={styles.reptext}>
            Federal
          </Text>
        </View>

        <View style={styles.square}>
          <View style={styles.icon}>
            <Feather
              name='triangle'
              color='purple'
              size={30}
            />
          </View>
          <Text style={styles.reptext}>
            State
          </Text>
        </View>
        
        <View style={styles.square}>
          <View style={styles.icon}>
            <Feather
              name='triangle'
              color='blue'
              size={30}
            />
          </View>
          <Text style={styles.reptext}>
            Local
          </Text>
        </View>

      </View>

      <View style={styles.block}>
        <Text style={styles.title}>
          Find Candidates
        </Text>
      </View>

      <View style={styles.row}>

        <View style={styles.square}>
          <View style={styles.icon}>
            <Feather
              name='triangle'
              color='red'
              size={30}
            />
          </View>
          <Text style={styles.reptext}>
            Federal
          </Text>
        </View>

        <View style={styles.square}>
          <View style={styles.icon}>
            <Feather
              name='triangle'
              color='purple'
              size={30}
            />
          </View>
          <Text style={styles.reptext}>
            State
          </Text>
        </View>
        
        <View style={styles.square}>
          <View style={styles.icon}>
            <Feather
              name='triangle'
              color='blue'
              size={30}
            />
          </View>
          <Text style={styles.reptext}>
            Local
          </Text>
        </View>

      </View>

    

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 40,
    //backgroundColor: 'white',
  },
  block: {
    margin: 20,
  },
  buttonblock: {
    margin: 32,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 12,
    textAlign: 'center',
  },
  buttontext: {
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  square: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 1,
  },
  icon: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  subtext: {
    fontSize: 14,
    color: 'gray',
  },
  reptext: {
    textAlign: 'center',
  },
});

export default ElectionScreen;

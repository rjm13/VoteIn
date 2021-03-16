import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import QuestionTile from '../components/questiontile';
import QuestionFlatList from '../components/QuestionFlatList';


const QuestionFeedScreen = () => {
  return (

      <View style={styles.container}>

        <QuestionFlatList />
   

        <StatusBar style="auto" />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //paddingTop: 10
    
  },
});

export default QuestionFeedScreen;

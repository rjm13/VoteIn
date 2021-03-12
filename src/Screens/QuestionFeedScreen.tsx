import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import QuestionTile from '../components/questiontile';

const QuestionFeedScreen = () => {
  return (

      <View style={styles.container}>

        <QuestionTile />
        <QuestionTile />
        <QuestionTile />
        <QuestionTile />

        <StatusBar style="auto" />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    paddingTop: 10
    
  },
});

export default QuestionFeedScreen;

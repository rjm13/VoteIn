import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import VideoPost from '../components/videopost';

const VideoFeedScreen = () => {
  return (
    <View style={styles.container}>
      <VideoPost />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});

export default VideoFeedScreen;

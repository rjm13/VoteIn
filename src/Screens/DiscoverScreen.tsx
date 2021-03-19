import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Image, Text } from 'react-native';
import * as VideoThumbnails from 'expo-video-thumbnails';

export default function App() {
  const [image, setImage] = useState(null);

  // const generateThumbnail = async () => {
  //   try {
  //     const { uri } = await VideoThumbnails.getThumbnailAsync(
  //       'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  //       {
  //         time: 15000,
  //       }
  //     );
  //     setImage(uri);
  //   } catch (e) {
  //     console.warn(e);
  //   }
  // };

  useEffect(() => {
    const generateThumbnail = async () => {
      const { uri } = await VideoThumbnails.getThumbnailAsync(
        'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        {
                  time: 15000,
                }
      );
        // if (!userInfo) {
        //   return;
        
      try {
          if ({uri}) {
            setImage(uri);      
          }
      } catch (e) {
        console.log(e);
      }
    }
    generateThumbnail();
  }, [])



  


  return (
    <View style={styles.container}>
      
      {<Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 200,
    height: 200,
  },
});

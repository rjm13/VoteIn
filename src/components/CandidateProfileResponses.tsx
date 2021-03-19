import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Button, TouchableWithoutFeedback } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from'react-native-vector-icons/Entypo';
import MaterialIcons from'react-native-vector-icons/MaterialIcons';

import * as VideoThumbnails from 'expo-video-thumbnails';

import videopost from '../../dummydata/videopostdata';

import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player';




//   const Item = ({ videoUri }) => (
//     <View style={styles.video}>
      
//       {<Image source={{ uri: image }} style={styles.video} />}
//     </View>
//     );
  

// const Item = ({ videoUri }) => (
//     <View style={styles.video}>
//         <VideoPlayer
//             videoProps={{
//                 source: { uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4'},
//                 resizeMode: Video.RESIZE_MODE_COVER,
//                 isMuted: false,
//                 volume: 1.0,
//                 rate: 1.0,
//                 shouldPlay: false,
//                 isLooping: true,
//                 //useNativeControls: isVisible ? true: false
//                 width: 140,
//                 height: 290
//             }}
//             inFullscreen={false}
//         />
//     </View>
//   );



const CandidateProfileResponses = () => {

    const [image, setImage] = useState(null);

    

    const Item = () => {

        const [isVisible, setIsVisible] = useState(false);
        
        const thumbnail = image

        return(
            <View style={styles.video}>
                
            
                <Image source={{ uri: thumbnail }} style={styles.video} />

                <TouchableWithoutFeedback
                    onPress={() => setIsVisible(!isVisible)}>
                        <View style={styles.overlay}>
                                <Text style={styles.textoverlay}>
                                    Immigration
                                </Text>
                        </View>        
                </TouchableWithoutFeedback>

                { isVisible ? (
                    <View style={styles.fulloverlay}>
                        <Text style={styles.questionoverlay}>
                            This is a question. How many characters can this be?
                        </Text>
                    </View>
                ) : false }
                        
                
            
            </View>
        );}


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
      
    const renderItem = ({ item }) => (
        <Item 
            videoUri={item.videoUri} />
      );

    return (
        <View style={styles.container}>

            <View style={styles.responseheader}>
                <Text style={styles.header}>
                    Responses
                </Text>
                <View style={styles.icons}>
                    <MaterialIcons
                        name='filter-list'
                        size={20}
                        color='gray'
                    />
                    <Entypo
                        name='plus'
                        size={20}
                        color='gray'
                    />
                </View>
            </View>


            
            <View style={styles.content}>
                
                <FlatList
                    data={videopost}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    initialNumToRender={2}
                    maxToRenderPerBatch={2}
                    updateCellsBatchingPeriod={50}
                    windowSize={2}
                    
                    style={{ 
                        //height: 600,
                        alignSelf: 'center',
                    }}

                >

                </FlatList>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10-0,
        //height: 2400,
        //width: 400,
    },
    headerblock: {
        //padding: 20,
        alignItems: 'center',
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        marginTop: 20,
    },
    paragraph: {
        fontSize: 12,
    },
    responseheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    icons: {
        flexDirection: 'row',
        width: 70,
        justifyContent: 'space-between',
    },
    video: {
        width: 110,
        height: 200,

      },
      textoverlay: {
        color: '#fff',
        fontWeight: 'bold',

      },
      overlay: {
        position: 'absolute',
        alignItems: 'center',
        width: 110,
        height: 29,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 5,
      },
      fulloverlay: {
        position: 'absolute',
        alignContent: 'center',
        justifyContent: 'center',
        width: 110,
        height: 171,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 8,
        marginTop: 29,

      },
      questionoverlay: {
        color: '#fff',
        fontSize: 11,

      },
  });

export default CandidateProfileResponses;
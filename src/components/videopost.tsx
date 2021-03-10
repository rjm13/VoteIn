import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
//import Video from 'react-native-video';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const VideoPost = () => {

  const [isVisible, setIsVisible] = useState(false);

  const [isLiked, setIsLiked] = useState(false);

  const [isDisliked, setIsDisliked] = useState(false);

  const onLikePress = () => {
    if ( isLiked === false ) {
        setIsLiked(true);
        setIsDisliked(false);
    }
    if ( isLiked === true ) {
        setIsLiked(false);
    }     
  };

  const onDislikePress = () => {
    if ( isDisliked === false ) {
        setIsDisliked(true);
        setIsLiked(false);
    }
    if ( isDisliked === true ) {
        setIsDisliked(false);
    }     
  };

  return (
    <View style={styles.container}>

        <View style={styles.video}>
            <VideoPlayer
                videoProps={{
                    source: { uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4'},
                    resizeMode: Video.RESIZE_MODE_COVER,
                    isMuted: false,
                    volume: 1.0,
                    rate: 1.0,
                    //shouldPlay: true,
                    isLooping: true,
                    //useNativeControls: isVisible ? true: false
                }}
                inFullscreen={true}
                
            />
        </View>
      

       <View style={styles.questionblock}>
           <Text style={styles.categorytext}>
               Fitness
           </Text>
            <Text style={styles.questiontext}>
                Do you believe that deadlifts should be done with a foward knuckle grip or an alternate grip?
            </Text>
        </View>

        
        <TouchableWithoutFeedback
          onPress={() => setIsVisible(!isVisible)}>
          <View style={styles.votebutton}>
            { isVisible ? (
                <View style={styles.votebuttonblock}>

                  <TouchableOpacity onPress={onDislikePress}>
                    <View style={styles.buttoncircle}>
                      <FontAwesome
                        name={isDisliked ? 'thumbs-down' : 'thumbs-o-down'}
                        size={50}
                        color='white' />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={onLikePress}>
                    <View style={styles.buttoncircle}>
                      <FontAwesome
                        name={isLiked ? 'thumbs-up' : 'thumbs-o-up'}
                        size={50}
                        color='white' />
                    </View>
                  </TouchableOpacity>

                </View>
              ) : false
            }
          </View>
        </TouchableWithoutFeedback>
        
       <View style={styles.bottom}>
            <View style={styles.footer}>
                <View style={styles.info}>
                    <Text style={styles.name}>
                        Candidate Name
                    </Text>
                    <Text style={styles.office}>
                        Office of Government
                    </Text>
                </View>
                <View style={styles.icons}>
                    <Entypo
                        name='gauge'
                        size={25}
                        color='#fff'
                        style={{ paddingHorizontal: 12 }}
                    />
                    <Entypo
                        name='share'
                        size={25}
                        color='#fff'
                        style={{ paddingHorizontal: 12 }}
                    />
                </View>
            </View>
        </View>  

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
},
  video: {
    position: 'absolute',
  },
  questionblock: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    paddingTop: 40,
  },
  votebutton: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '50%',
    justifyContent: 'center',
  },
  buttoncircle: {
     backgroundColor: 'rgba(0,0,0,0.5)',
     paddingVertical: 20,
     paddingHorizontal: 24,
     borderRadius: 50,
  },
  questiontext: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  categorytext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 8,
    textAlign: 'center',
  },
  bottom: {
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: 40,
    
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,  
  },
  info: {

  },
  votebuttonblock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icons: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',

  },
  name: {
    color: '#fff',
    fontSize: 16,
  },
  office: {
    color: '#fff',
    fontSize: 14,
  },
});

export default VideoPost;

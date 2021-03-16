import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
//import Video from 'react-native-video';
import {Avatar} from 'react-native-paper';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import { useNavigation } from '@react-navigation/native';

import { Modalize } from 'react-native-modalize';
import { Host, Portal } from 'react-native-portalize';
import BottomModal from '../components/bottommodal';


import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Item = ({ category }) => {

  const [isChecked, setIsChecked] = useState(false);

  const onCheck = () => {
      if ( isChecked === false ) {
          setIsChecked(true);
      }
      if ( isChecked === true ) {
          setIsChecked(false);
      }      
  };

  return (

  <TouchableWithoutFeedback onPress={onCheck}>
      <View style={styles.listcomponent}>
          <FontAwesome 
              name={isChecked ? 'check-square' : 'square-o'}
              color={isChecked ? '#9ed3ff' : 'gray'}
              size={20}
              style={{paddingHorizontal: 20}}
          />
          <Text style={styles.listitem}>
              {category}
          </Text>
      </View>
  </TouchableWithoutFeedback>
  
  ); 
}

const VideoPost = () => {

  const modalRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalRef.current?.open();
  };

  const navigation = useNavigation();

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

  const renderItem = ({ item }) => (
    <Item 
        category={item.category} 
    />
  );

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
          <TouchableOpacity onPress={onOpen}>
            <Text style={styles.categorytext}>
                Fitness
            </Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('QuestionStack', { screen: 'Question', initial: false })} 
           >
              <Text style={styles.questiontext}>
                  Do you believe that deadlifts should be done with a foward knuckle grip or an alternate grip?
              </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.navblock}>
            <FontAwesome 
              name='arrow-left'
              size={20}
              color='white'
            />
            <FontAwesome 
              name='arrow-right'
              size={20}
              color='white'
            />

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
                        <Text style={styles.count}>
                          1.8k
                        </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={onLikePress}>
                    <View style={styles.buttoncircle}>
                      <FontAwesome
                        name={isLiked ? 'thumbs-up' : 'thumbs-o-up'}
                        size={50}
                        color='white' />
                        <Text style={styles.count}>
                          1.8k
                        </Text>
                    </View>
                  </TouchableOpacity>

                </View>
              ) : false
            }
          </View>
        </TouchableWithoutFeedback>
        
       <View style={styles.bottom}>
            <View style={styles.footer}>

              <View style={styles.infoblock}>
                <Avatar.Image
                  source={{ uri: 'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg'}}
                  size={40}
                  style={styles.avatar}
                />

                <View style={styles.info}>
                    <Text style={styles.name}>
                        Candidate Name
                    </Text>
                    <Text style={styles.office}>
                        Office of Government
                    </Text>
                </View>
              </View>

              <View style={styles.icons}>
                  <View>
                    <Entypo
                      name='gauge'
                      size={25}
                      color='#fff'
                      style={{ paddingHorizontal: 12 }}
                    />
                    <Text style={styles.icontext}>
                      1.1k
                    </Text>
                  </View>
                  
                  <View>
                    <FontAwesome
                      name='share'
                      size={25}
                      color='#fff'
                      style={{ paddingHorizontal: 12 }}
                    />
                    <Text style={styles.icontext}>
                      1.3k
                    </Text>
                  </View>
                  
              </View>
            </View>

            <View style={styles.bottomblock}>
                <Text style={styles.hashtags}>
                  #Texas  #Austin  #TravisCounty
                </Text>
            </View>

        </View>  

      <StatusBar style="light" />

      <Portal>
        {/* <Modalize ref={modalRef}>
          <BottomModal />
        </Modalize> */}

        <Modalize
          ref={modalRef}
          flatListProps={{
            data: BottomModal,
            renderItem: renderItem,
            keyExtractor: item => item.id,
            showsVerticalScrollIndicator: false,
            numColumns: 2,
            ListHeaderComponent: () => {
              return (
                <View style={styles.filterheaderblock}>
                    <Text style={styles.filterheader}>Filter</Text>
                </View>
              )
            }
          }}
        />
      </Portal>

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
  navblock: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between'
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
     paddingHorizontal: 38,
     borderRadius: 100,
  },
  questiontext: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  count: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
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
    marginBottom: 50,
    
  },
  bottomblock: {
    marginHorizontal: 30,
    //backgroundColor: 'red',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  info: {
    marginHorizontal: 10,
  },
  infoblock: {
    flexDirection: 'row',
  },
  avatar: {
    elevation: 2,
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
    fontSize: 14,
    fontWeight: 'bold',
  },
  office: {
    color: '#fff',
    fontSize: 12,
  },
  icontext: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    padding: 2,
  },
  hashtags: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  listcomponent: {
    flexDirection: 'row',
    padding: 10,
    width: '45%',
  },
  listitem: {
    fontSize: 16,
  },
  filterheader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  filterheaderblock: {
    margin: 20,
  },
});

export default VideoPost;

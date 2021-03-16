import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect, useRef, useCall} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

import Profile from '../components/CandidateProfile';


const DATA = [
    {
      id: '1',
      title: 'Profile'
    },
    {
      id: '2',
      title: 'Endorsements'
    },
    {
      id: '3',
      title: 'Responses'
    },
    {
      id: '4',
      title: 'In the News'
    },
  ];
  
  const Item = ({ title, onPress, style, textstyle }) => (

    <TouchableOpacity 
      onPress={onPress}
      style={styles.content}>
          <View style={[styles.menubutton, style]}>
                        <Text style={[styles.buttontext, textstyle]}>
                            {title}
                        </Text>
                    </View>
    </TouchableOpacity>
    
  );
  
  const OptionsMenu = () => {

    const [selectedId, setSelectedId] = useState('1');

    const navigation = useNavigation();

    const route = useRoute();

    // useEffect(() => {
    //   if (route.params?.selectedId) {
    //     // Post updated, do something with `route.params.post`
    //     // For example, send the post to the server

    //   }
    // }, [route.params?.selectedId]);

   

  

    const renderItem = ({ item, index }) => {
      const backgroundColor = item.id === selectedId ? '#407cad' : '#fff';
      const color = item.id === selectedId ? '#fff' : '#407cad';
      

      return (
        <Item
          title={item.title}
          onPress={() => ScrollToThisThing(index, item)}
          style={{ backgroundColor }}
          textstyle={{ color }}
        />
      );
    };

    const flatListRef = useRef(null);


    // async function ScrollToThisThing  (index, item ) {

    //   setSelectedId(item.id);
    //   navigation.navigate('Candidate', {selectedId: selectedId})
    //   //flatListRef.current.scrollToItem({ item: item, animated: true, viewPosition: 1 })
    // };

    const ScrollToThisThing = (index, item) => {
      setSelectedId(item.id);
      flatListRef.current.scrollToItem({ item: item, animated: true, viewPosition: 1 })
    }
    
    useEffect(() => {
      navigation.navigate('Candidate', {selectedId: selectedId});
    }, [selectedId]);




    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          ref={flatListRef}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          getItemLayout={(item, index) => { return {length: 166, index: index, offset: 166 * index} }}

        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 16,
      //marginVertical: 16,
      //flex: 1,
      //marginTop: StatusBar.currentHeight || 0,
    },
    content: {
      //flex: 1,
      marginTop: 8,
      marginHorizontal: 8,
    },
    
    menubutton: {
        borderColor: '#407cad',
        borderRadius: 16,
        borderWidth: 1.5,

    },
    buttontext: {
        fontSize: 16,
        color: '#407cad',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
  });
  
  export default OptionsMenu;


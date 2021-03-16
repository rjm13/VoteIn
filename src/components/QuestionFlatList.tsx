import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DATA = [
    {
      id: '1',
      question: 'This is my question addressed to an office. How long can this be before it wraps off the screen?',
      category: 'Immigration',
      office: 'Federal',
      postdate: 'Today 11:58pm',
      user: 'annonymousTexan',
      bumps: '1.8k',
      shares: '842',
      tags: '24',
    },
    {
        id: '2',
        question: 'How do you feel about this app? Are discussions centered around a single question the way to go?',
        category: 'Opinion',
        office: 'State',
        postdate: 'Today 11:58pm',
        user: 'annonymousTexan',
        bumps: '1.8k',
        shares: '842',
        tags: '24',
    },
    {
        id: '3',
        question: 'What is the actual deal yo? Like, do you even?',
        category: 'Personal',
        office: 'Local',
        postdate: 'Today 11:58pm',
        user: 'annonymousTexan',
        bumps: '1.8k',
        shares: '842',
        tags: '24',
    },
    {
        id: '4',
        question: 'What is the actual deal yo? Like, do you even?',
        category: 'Personal',
        office: 'Local',
        postdate: 'Today 11:58pm',
        user: 'annonymousTexan',
        bumps: '1.8k',
        shares: '842',
        tags: '24',
    },
    {
        id: '5',
        question: 'What is the actual deal yo? Like, do you even?',
        category: 'Personal',
        office: 'Local',
        postdate: 'Today 11:58pm',
        user: 'annonymousTexan',
        bumps: '1.8k',
        shares: '842',
        tags: '24',
    },
  ];

  const Item = ({ question, category, office, postdate, user, bumps, shares, tags }) => {

    const navigation = useNavigation();

      return (
    <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Question') }}>
                <View style={styles.summarybox}>
                    <Text style={styles.paragraph}>
                        {question}
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.footer}>
                <View style={styles.playersbutton}>
                    <Text style={styles.footertext}>
                        {category}
                    </Text>
                </View>

                <View style={styles.variationsbutton}>
                    <Text style={styles.footertext}>
                        {office}
                    </Text>
                </View>
            </View>

            <View style={styles.header}>
                <View style={styles.titlebox}>
                    <Text style={styles.timestamp}>
                        {postdate}
                    </Text>
                    <Text style={styles.username}>
                        user({user})
                    </Text>
                </View>
                <View style={styles.icons}>

                    <View style={styles.iconbox}>
                        <FontAwesome
                            name='thumbs-o-up'
                            color='#05375a'
                            size={20}
                        />
                        <Text style={styles.icontext}>
                            {bumps}
                        </Text>
                    </View>

                    <View style={styles.iconbox}>
                        <FontAwesome
                            name='share'
                            color='#05375a'
                            size={20}
                        />
                        <Text style={styles.icontext}>
                            {shares}
                        </Text>
                    </View>

                    <View style={styles.iconbox}>
                        <FontAwesome5
                            name='user-tag'
                            color='#05375a'
                            size={20}
                        />
                        <Text style={styles.icontext}>
                            {tags}
                        </Text>
                    </View>



                </View>
            </View>    

        </View>
  );}
  
  const QuestionList = () => {

    const renderItem = ({ item }) => (
      <Item 
        question={item.question} 
        category={item.category}
        office={item.office}
        postdate={item.postdate}
        user={item.user}
        bumps={item.bumps}
        shares={item.shares}
        tags={item.tags}
        />
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        borderBottomWidth: .3,
        borderColor: 'gray',
        marginTop: 10,
        backgroundColor: '#fff',
    },
    titlebox: {
        
    },
    header: {
        marginHorizontal: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    timestamp: {
        fontSize: 14,
        color: 'black',
    },
    username: {
        fontSize: 11,
        color: 'gray'
    },
    icons: {
        flexDirection: 'row',
        
    },
    iconbox: {
        paddingHorizontal: 10,
    },
    icontext: {
        paddingTop: 5,
        fontSize: 9,
        //backgroundColor: 'yellow',
        textAlign: 'center',
    },
    summarybox: {
        //backgroundColor: '#E9E9EA',
        marginHorizontal: 10,
        //borderRadius: 8,
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 14,
        marginHorizontal: 8,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    playersbutton: {
        borderRadius: 4,
        backgroundColor: '#9ed3ff',
        marginHorizontal: 16,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    variationsbutton: {
        borderRadius: 4,
        backgroundColor: '#D9D1B2',
        marginHorizontal: 16,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    footertext: {
        fontSize: 14,
    },
  });
  
  export default QuestionList;
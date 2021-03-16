import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useRoute } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Menu from '../components/CandidateProfileMenu';
import Profile from '../components/CandidateProfile';




const CandidatePage = () => {

    const route = useRoute();

    const {selectedId} = route.params;

    console.log(selectedId);

    function renderElement () {
        if(selectedId === '1'){
            return <Profile />;
        }
        else if(selectedId === '2' ){
            return <Text>If-Else condition 2</Text>;
        }
        else if(selectedId === '3' ){
            return <Text>If-Else condition 3</Text>;
        }
        else if(selectedId === '4' ){
            return <Text>If-Else condition 4</Text>;
        }
        
    }

      
      


    return (
        <ScrollView style={styles.container}>

            <ImageBackground 
                style={{ width: '100%', height: 400 }}
                source={{ uri: 'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg'}} >
                    <LinearGradient 
                        colors={['transparent', '#fff']}
                        style={{ width: '100%', height: 400, position: 'absolute' }} />
                    <View style={styles.block}>
                        <View style={styles.nameblock}>
                            <Text style={styles.name}>
                                Happy Gilmore
                            </Text>
                            <MaterialCommunityIcons 
                                name='comment-question-outline'
                                color='gray'
                                size={25}
                                style={{ alignSelf: 'center', paddingHorizontal: 10}} />
                        </View>
                        <Text style={styles.subtext}>
                            11,159 Supporters
                        </Text>
                    </View>
            </ImageBackground>  

            <Menu />
           
           <View>
               {renderElement()}
           </View>
             
           

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    block: {
        marginTop: 330,
    },
    nameblock: {
        justifyContent: 'center', 
        flexDirection: 'row',
    },
    name: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtext: {
        fontSize: 16,
        textAlign: 'center',
        margin: 5
    },
    iconmenu: {

    },
    menubutton: {
        borderColor: '#407cad',
        borderRadius: 16,
        borderWidth: 1.5,
        marginHorizontal: 10,

    },
    buttontext: {
        fontSize: 16,
        color: '#407cad',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
});

export default CandidatePage;
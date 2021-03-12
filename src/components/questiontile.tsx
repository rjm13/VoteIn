import React from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const QuestionTile = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Question') }}>
                <View style={styles.summarybox}>
                    <Text style={styles.paragraph}>
                        This is my question addressed to a person or an office. How long can this before it wraps off the screen?
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.footer}>
                <View style={styles.playersbutton}>
                    <Text style={styles.footertext}>
                        Immigration
                    </Text>
                </View>

                <View style={styles.variationsbutton}>
                    <Text style={styles.footertext}>
                        Federal
                    </Text>
                </View>
            </View>

            <View style={styles.header}>
                <View style={styles.titlebox}>
                    <Text style={styles.timestamp}>
                        Today 11:59pm
                    </Text>
                    <Text style={styles.username}>
                        user(annonymousTexan)
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
                            1.86k
                        </Text>
                    </View>

                    <View style={styles.iconbox}>
                        <FontAwesome
                            name='share'
                            color='#05375a'
                            size={20}
                        />
                        <Text style={styles.icontext}>
                            842
                        </Text>
                    </View>

                    <View style={styles.iconbox}>
                        <FontAwesome5
                            name='user-tag'
                            color='#05375a'
                            size={20}
                        />
                        <Text style={styles.icontext}>
                            24
                        </Text>
                    </View>



                </View>
            </View>    

        </View>
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
  
  export default QuestionTile;
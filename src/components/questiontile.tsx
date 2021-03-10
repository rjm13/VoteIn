import React from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const QuestionTile = () => {
    return (
        <SafeAreaView style={styles.tile}>

            <View style={styles.votes}>
                <FontAwesome
                    name='thumbs-up'
                    size={25}
                    color='blue' />
                <Text style={styles.votecount}>
                    1,874
                </Text>
            </View>

            <View style={styles.questionblock}>
                <Text style={styles.question}>
                    This is my question tile. How long can this get and what happens when it gets too long? 
                </Text>
                <Text style={styles.subtext}>
                    This is my subtext.
                </Text>
            </View>

            <View style={styles.categoryicon}>
                <FontAwesome
                    name='space-shuttle'
                    size={25}
                    color='gray' />
            </View>

            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    tile: {
      backgroundColor: 'white',
      width: Dimensions.get('window').width,
      flexDirection: 'row',
      //justifyContent: 'space-between',
      padding: 20,
    
      borderBottomWidth: 0.3,
      borderColor: 'gray',
    },
    votes: {
        justifyContent: 'center',
        paddingRight: 20,
        //backgroundColor: 'red',
    },
    votecount: {
        fontSize: 9,
        color: 'gray',
        marginVertical: 6,
    },
    questionblock: {
        justifyContent: 'flex-start',
        width: '70%',
        //backgroundColor: 'green',
    },
    question: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    subtext: {
        marginTop: 10,
        fontSize: 12,
        color: 'gray',
    },
    categoryicon: {
        justifyContent: 'center',
        paddingLeft: 20,
        //backgroundColor: 'pink',
    },
  });
  
  export default QuestionTile;
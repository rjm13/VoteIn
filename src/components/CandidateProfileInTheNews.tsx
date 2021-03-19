import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const CandidateProfileInTheNews = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerblock}>
               <Text style={styles.header}>
                    Test
                </Text> 
            </View>

            <View style={styles.content}>
                <Text style={styles.paragraph}>
                    dnbou kjfbngouanebnk  dkunfbvoiuak n eruygyb ieyrg yerghbpBPUBH bhgb iebr ud .
                    dnbou kjfbngouanebnk  dkunfbvoiuak n eruygyb ieyrg yerghbpBPUBH bhgb iebr ud .
                    dnbou kjfbngouanebnk  dkunfbvoiuak n eruygyb ieyrg yerghbpBPUBH bhgb iebr ud .
                    dnbou kjfbngouanebnk  dkunfbvoiuak n eruygyb ieyrg yerghbpBPUBH bhgb iebr ud .
                    dnbou kjfbngouanebnk  dkunfbvoiuak n eruygyb ieyrg yerghbpBPUBH bhgb iebr ud .
                    dnbou kjfbngouanebnk  dkunfbvoiuak n eruygyb ieyrg yerghbpBPUBH bhgb iebr ud .
                    dnbou kjfbngouanebnk  dkunfbvoiuak n eruygyb ieyrg yerghbpBPUBH bhgb iebr ud .
                    dnbou kjfbngouanebnk  dkunfbvoiuak n eruygyb ieyrg yerghbpBPUBH bhgb iebr ud .
                    dnbou kjfbngouanebnk  dkunfbvoiuak n eruygyb ieyrg yerghbpBPUBH bhgb iebr ud .
                    dnbou kjfbngouanebnk  dkunfbvoiuak n eruygyb ieyrg yerghbpBPUBH bhgb iebr ud .
                    
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        height: 2400,
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
        margin: 20,
    },
    paragraph: {
        fontSize: 12,
    },
  });

export default CandidateProfileInTheNews;
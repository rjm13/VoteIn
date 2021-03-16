import React, {useState} from 'react';
import {View, Text, StyleSheet, SectionList, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ballotdata from '../../dummydata/ballotdata';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Item = ({ avatar, name, endorsements, agree }) =>  {

    const navigation = useNavigation();

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
        <View style={styles.tile}>
                
            <View style={styles.leftbox}>
                <TouchableOpacity onPress={() => { navigation.navigate('Candidate') }}>
                <Image 
                    source={avatar}
                    style={{ height: 80, width: 80, alignSelf: 'center', borderBottomLeftRadius: 8, borderTopLeftRadius: 8,}}
                />
                </TouchableOpacity>
                <View style={styles.nameblock}> 
                    <Text style={styles.candidatename}>
                        {name}
                    </Text>
                    <Text style={styles.endorsetext}>
                        {endorsements} endorsements
                    </Text>
                    <Text style={styles.agreetext}>
                        {agree} agree
                    </Text>
                </View>
            </View>

            <View style={styles.checkblock}>
                <TouchableWithoutFeedback onPress={onCheck}>
                <FontAwesome 
                    name={isChecked ? 'check-square' : 'square-o'}
                    color={isChecked ? '#9ed3ff' : 'gray'}
                    size={25}
                />
                </TouchableWithoutFeedback>
            </View>

        </View>
  );}

const BallotSections = () => {

    

    return (
        <View>
            <SectionList
                sections={ballotdata}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => 
                    <Item 
                        name={item.name}
                        avatar={item.avatar}
                        endorsements={item.endorsements}
                        agree={item.agree}
                        //office={item.office}
                        /> }

                ListHeaderComponent={() => (
                    <View style={styles.headerblock}>
                        <Text style={styles.date}>
                            March 3, 2022
                        </Text>
                        <Text style={styles.title}>
                            Democrat Primary Election
                        </Text>
                        <Text style={styles.ballotinfo}>
                            I am a Democrat and understand that I am ineligible to vote or participate in another political party’s primary election or convention during this voting year.
                        </Text>
                    </View>
                )}     
                renderSectionHeader={({ section: { office } }) => (
                    <View style={styles.officeheader}>
                        <Text style={styles.title}>
                            {office}
                        </Text>
                        <Feather 
                            name='more-horizontal'
                            size={20}
                        />
                    </View>       
                )}
            />
        </View>
    );
}

export default BallotSections;

const styles = StyleSheet.create({
    container: {
      //flex: 1,
    },
    headerblock: {
      alignItems: 'center',
      margin: 20,
    },
    date: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    ballotinfo: {
      fontSize: 12,
      color: 'gray',
      textAlign: 'center',
    },
    officeblock: {
  
    },
    officeheader: {
      marginHorizontal: 20,
      marginBottom: 10,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    tile: {
      marginHorizontal: 10,
      marginVertical: 10,
      backgroundColor: 'white',
      elevation: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 8,
    },
    nameblock: {
      margin: 10,
      //backgroundColor: 'red'
    },
    candidatename: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    checkblock: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      margin: 20,
    },
    leftbox: {
      flexDirection: 'row',
    },
    endorsetext: {
      fontSize: 12,
      color: 'blue',
    },
    agreetext: {
      fontSize: 12,
      color: 'green',
    },
  });


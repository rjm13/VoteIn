import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import BallotSectionList from '../components/ballotsectionlist';

const Ballot = () => {

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
    <View style={styles.container}>      

        <View style={{ height: '100%'}}>
           <BallotSectionList /> 
        </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
    margin: 20,
  },
  tile: {
    margin: 10,
    backgroundColor: 'white',
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default Ballot;

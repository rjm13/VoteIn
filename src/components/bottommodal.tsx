import React, {useState} from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, FlatList } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DATA = [
    {
        id: '1',
        category: 'Immigration',
    },
    {
        id: '2',
        category: 'COVID-19',
    },
    {
        id: '3',
        category: 'Foreign Policy',
    },
    {
        id: '4',
        category: 'Economics',
    },
    {
        id: '5',
        category: 'Budgit',
    },
    {
        id: '6',
        category: 'Education',
    },
    {
        id: '7',
        category: 'Elections',
    },
    {
        id: '8',
        category: 'Environment',
    },
    {
        id: '9',
        category: 'Healthcare',
    },
    {
        id: '10',
        category: 'Labor',
    },
    {
        id: '11',
        category: 'Transportation',
    },
    {
        id: '12',
        category: 'Criminal Justice',
    },
    {
        id: '13',
        category: 'Technology',
    },
    {
        id: '14',
        category: 'Social Issues',
    },
    {
        id: '15',
        category: 'Energy Policy',
    },
];

export default DATA;

// export const BottomModal = () => {

//     const renderItem = ({ item }) => (
//         <Item 
//             category={item.category} 
//         />
//       );

//   return (
//     <View style={styles.container}>
//         <View>
//             <Text style={styles.header}>
//                 Filter
//             </Text>
//         </View>

//         <View style={styles.filterbox}>
//             <FlatList
//                 data={DATA}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id}
//             />
//         </View>
        
//     </View>
//   );
// }

const styles = StyleSheet.create({
    container: {
      margin: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  filterbox: {

  },
  listcomponent: {
    flexDirection: 'row',
    padding: 10,
  },
  listitem: {
    fontSize: 16,
  },
});

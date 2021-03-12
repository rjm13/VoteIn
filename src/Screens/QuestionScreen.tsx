import React, {useState} from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity, Button, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import { Avatar } from 'react-native-paper';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from'react-native-vector-icons/Entypo';
import MaterialIcons from'react-native-vector-icons/MaterialIcons';

const QuestionView = ({navigation}) => {

    const [isVisible, setIsVisible] = useState(false);

    const [tagIsVisible, setTagIsVisible] = useState(false);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.topbar}>
                    <FontAwesome
                        name='chevron-left'
                        size={20}
                        color='gray'
                        onPress={() => { navigation.goBack() }}
                    />
                    <Entypo
                        name='share'
                        size={20}
                        color='gray'
                    />
                </View>

                <View style={styles.topbar}>
                    <Text style={styles.addresstext}>
                        For all federal candidates
                    </Text>
                    <View style={styles.counter}>
                        <Text style={styles.icontext}>
                            1876
                        </Text>
                        <FontAwesome
                            name='thumbs-o-up'
                            size={20}
                            color='gray'
                        />
                       
                    </View>
                    
                </View>

                <View style={styles.questionblock}>
                    
                
                    <Text style={styles.question}>
                        This is my question screen to hightlight a specific question. What is the airspeed velocity of an unladen swallow?
                    </Text>  
                </View>

                <View style={styles.chipblock}>
                    <View style={styles.categorybutton}>
                        <Text style={styles.buttontext}>
                            category
                        </Text>
                        </View>

                    <View style={styles.officebutton}>
                        <Text style={styles.buttontext}>
                            office
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                <TouchableWithoutFeedback onPress={() => setIsVisible(!isVisible)}>
                    <View style={styles.sourceheader}>
                        <Text style={styles.sourceheadertext}>
                            Sources
                        </Text>
                        <Entypo
                            name='plus'
                            size={20}
                            color='gray'
                        />
                    </View>
                </TouchableWithoutFeedback>
                    { isVisible ? (
                        <View style={styles.sources}>
                            <Text style={styles.sourcetext}>
                                1. CNN: Monty Python and the Holy Grail
                            </Text>
                            <Text style={styles.sourcetext}>
                                1. MSNBC: African and European Birds
                            </Text>

                            <View style={styles.linebreak}></View>

                            <View style={styles.sources}>
                                <Text style={styles.sourcetext}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque aliquam arcu, id tristique lectus molestie id. Sed id pellentesque arcu. Aenean pharetra vehicula nisi, nec facilisis sapien varius ut. Sed non condimentum lectus.
                                </Text>
                            </View>
                        </View>
                        ) : false
                    }
                </View>

                <View style={styles.card}>
                <TouchableWithoutFeedback onPress={() => setTagIsVisible(!tagIsVisible)}>
                    <View style={styles.sourceheader}>
                        <Text style={styles.sourceheadertext}>
                            Tags
                        </Text>
                        <Entypo
                            name='plus'
                            size={20}
                            color='gray'
                        />
                    </View>
                </TouchableWithoutFeedback>
                    { tagIsVisible ? (
                        <View style={styles.tagsbox}>
                            <Avatar.Image
                                source={{ uri: 'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg'}}
                                size={40}
                                style={styles.avatar}
                            />
                            <View>
                               <Text style={styles.person}>
                                    Cory Carson
                                </Text>
                                <Text style={styles.addresstext}>
                                    Texas State Senator
                                </Text> 
                            </View>   
                        </View>

                        
                        
                        

                        ) : false
                    }
                </View>

                <View style={styles.responses}>

                <View style={styles.responseheader}>
                    <Text style={styles.sourceheadertext}>
                        Responses
                    </Text>
                    <View style={styles.icons}>
                        <MaterialIcons
                            name='filter-list'
                            size={20}
                            color='gray'
                        />
                        <Entypo
                            name='plus'
                            size={20}
                            color='gray'
                        />
                    </View>
                </View>

                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={{ 
                            width: '150%', 
                            alignItems: 'flex-start', 
                            paddingLeft: 15, 
                            //paddingTop: 20
                        }}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={200}
                        decelerationRate="fast"
                        //pagingEnabled 
                    >
                        <Image 
                            style={{ width: 150, height: 200, marginHorizontal: 5 }}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/08/05/18/hot-air-ballon-1807521_1280.jpg'}}
                        />
                        <Image 
                            style={{ width: 150, height: 200, marginHorizontal: 5 }}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/08/05/18/hot-air-ballon-1807521_1280.jpg'}}
                        />
                        <Image 
                            style={{ width: 150, height: 200, marginHorizontal: 5 }}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/08/05/18/hot-air-ballon-1807521_1280.jpg'}}
                        />    
                    </ScrollView>
                </View>  

                <View style={styles.responseheader}>
                    <Text style={styles.sourceheadertext}>
                        Comments
                    </Text>
                    <View style={styles.icons}>
                        <FontAwesome
                            name='sort-alpha-asc'
                            size={20}
                            color='gray'
                        />
                        <Entypo
                            name='plus'
                            size={20}
                            color='gray'
                        />
                    </View>
                </View>   

                <View style={styles.commentbox}>
                    <View style={styles.commentheader}>
                        <View style={{flexDirection: 'row'}}>
                        <Avatar.Image
                            source={{ uri: 'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg'}}
                            size={40}
                            style={styles.avatar}
                        />
                        <View>
                           <Text style={styles.sourceheadertext}>
                                Vicky Voter
                            </Text> 
                            <Text>
                                184
                            </Text>
                        </View>
                        </View>
                        
                           <MaterialIcons 
                            name='more-vert'
                            size={25}
                        />  
                        
                        
                        
                    </View>
                    <View style={styles.responses}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque aliquam arcu, id tristique lectus molestie id. Sed id pellentesque arcu. Aenean pharetra vehicula nisi, nec facilisis sapien varius ut. Sed non condimentum lectus.
                        </Text>  
                    </View>
                    
                </View>             
                
                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 30,
      paddingTop: 10,
    },
    topbar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
        justifyContent: 'space-between',
    },
    questionblock: {
        marginHorizontal: 20,
    },
    question: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    addresstext: {
        fontSize: 14,
        color: 'gray',
        //marginBottom: 8
    },
    chipblock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20

    },
    categorybutton: {
        borderRadius: 4,
        backgroundColor: '#9ed3ff',
        marginHorizontal: 16,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    officebutton: {
        borderRadius: 4,
        backgroundColor: '#D9D1B2',
        marginHorizontal: 16,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    buttontext: {
        fontSize: 14,
    },
    card: {
        borderColor: 'gray',
        borderWidth: 0.3,
        borderRadius: 8,
        marginHorizontal: 20,
        marginVertical: 10,
        },
    sourceheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    responseheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    sourceheadertext: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    sources: {
       marginHorizontal: 20,
       marginBottom: 10,
    },
    tagsbox: {
        marginHorizontal: 20,
        marginBottom: 10,
        flexDirection: 'row',
     },
    sourcetext: {
        fontSize: 13,
        marginVertical: 5
    },
    linebreak: {
        backgroundColor: '#9ed3ff',
        margin: 10,
        height: 1,
    },
    person: {
        fontSize: 16,
    },
    responses: {
        marginVertical: 10,
    },
    icons: {
        flexDirection: 'row',
        width: 70,
        justifyContent: 'space-between',
    },
    icontext: {
        fontSize: 10,
        color: 'gray',
        paddingHorizontal: 8,
    },
    counter: {
        alignItems: 'center',
        flexDirection: 'row',
       // backgroundColor: 'red',
    },
    commentbox: {
        backgroundColor: '#ededed',
        borderRadius: 8,
        marginHorizontal: 20,
        marginBottom: 10,
        padding: 10,
    },
    commentheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    avatar: {
        marginRight: 10,
    },
  });
  
  export default QuestionView;
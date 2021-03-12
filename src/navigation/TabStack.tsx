import React, {useEffect, useState} from 'react';
import { View, Image, Button } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import OptionsMenu from "react-native-options-menu";

import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from '../Screens/ProfileScreen';
import ElectionScreen from '../Screens/ElectionScreen';
import DiscoverScreen from '../Screens/DiscoverScreen';
import VideoFeedScreen from '../Screens/VideoFeedScreen';
import QuestionFeedScreen from '../Screens/QuestionFeedScreen';

import QuestionScreen from '../Screens/QuestionScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { Host, Portal } from 'react-native-portalize';

function Logo() {
    return (
        <Image
            style={{ width: 40, height: 25 }}
            source={require('../../assets/voteinlogo.png')}
        />
   );
}

const MoreIcon = ( <Feather name='more-vertical' color='#05375a' size={20} style={{ paddingRight: 20 }}/> )

const ProfileStack = () => {
    return (  
            <Stack.Navigator
                screenOptions={{
                    headerTitle: props => <Logo {...props} />,
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTitleStyle: {
                        fontSize: 16,
                    },
                    headerTitleAlign: 'center',
                    headerTitleContainerStyle: {
                        //height: '200%',
                        //marginTop: 40
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => (
                        <FontAwesome 
                            name='institution'
                            size={20}
                            color='gold'
                            style={{ paddingLeft: 20 }}
                        />
                    ),
                    headerRight: () => (
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                                    }}
                        >
                            <Feather.Button 
                                name='search'
                                size={20}
                                color='black'
                                backgroundColor='#fff'
                                style={{ paddingRight: 20 }}
                                onPress={() => {}}
                            />
                            <OptionsMenu
                                customButton={MoreIcon}
                                //buttonStyle={{ width: 32, height: 8, margin: 7.5, resizeMode: "contain" }}
                                destructiveIndex={1}
                                options={["Polling Locations", "Registration Guide", "Quick Links", "Voter Help"]}
                                //actions={[editPost, deletePost]}
                    />
                        </View>
                    ),
                }}   
                >
                <Stack.Screen 
                    name='Profile'
                    component={ProfileScreen}
                />
            </Stack.Navigator> 
    );
}

const ElectionStack = () => {
    return (  
            <Stack.Navigator
                screenOptions={{
                    headerTitle: props => <Logo {...props} />,
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTitleStyle: {
                        fontSize: 16,
                    },
                    headerTitleAlign: 'center',
                    headerTitleContainerStyle: {
                        //height: '200%',
                        //marginTop: 40
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                                    }}
                        >
                            <Feather.Button 
                                name='search'
                                size={20}
                                color='black'
                                backgroundColor='#fff'
                                style={{ paddingRight: 15 }}
                                onPress={() => {}}
                            />
                            <OptionsMenu
                                customButton={MoreIcon}
                                //buttonStyle={{ width: 32, height: 8, margin: 7.5, resizeMode: "contain" }}
                                destructiveIndex={1}
                                options={["Polling Locations", "Registration Guide", "Quick Links", "Voter Help"]}
                                //actions={[editPost, deletePost]}
                    />
                        </View>
                    ),
                }}   
                >
                <Stack.Screen 
                    name='Election'
                    component={ElectionScreen}
                />
            </Stack.Navigator> 
    );
}

const QuestionStack = () => {
    return (  
            <Stack.Navigator
                screenOptions={{
                    headerTitle: props => <Logo {...props} />,
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTitleStyle: {
                        fontSize: 16,
                    },
                    headerTitleAlign: 'center',
                    headerTitleContainerStyle: {
                        //height: '200%',
                        //marginTop: 40
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                                    }}
                        >
                            <Feather.Button 
                                name='search'
                                size={20}
                                color='black'
                                backgroundColor='#fff'
                                style={{ paddingRight: 15 }}
                                onPress={() => {}}
                            />
                            <OptionsMenu
                                customButton={MoreIcon}
                                //buttonStyle={{ width: 32, height: 8, margin: 7.5, resizeMode: "contain" }}
                                destructiveIndex={1}
                                options={["Ask a question", "Filter", "Sort"]}
                                //actions={[editPost, deletePost]}
                    />
                        </View>
                    ),
                }}   
                >
                <Stack.Screen 
                    name='QuestionFeed'
                    component={QuestionFeedScreen}
                />
                <Stack.Screen 
                    name='Question'
                    component={QuestionScreen}
                    options={{
                        headerShown: false
                    }}
                />

            </Stack.Navigator> 
    );
}

const Tabs = () => {



    return (
        <NavigationContainer>
            <Host>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'gray',
                    showLabel: false,
                    style: {
                        backgroundColor: '#fff',
                        height: 60,
                    }
                }}
                screenOptions={({ route }) => ({
                    
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'ProfileStack') {
                            iconName = focused ? 'user' : 'user';
                        } else if (route.name === 'ElectionStack') {
                            iconName = focused ? 'check-square' : 'check';
                        }
                        else if (route.name === 'Discover') {
                            iconName = focused ? 'home' : 'home';
                        }
                        else if (route.name === 'VideoFeed') {
                            iconName = focused ? 'tv' : 'tv';
                        }
                        else if (route.name === 'QuestionStack') {
                            iconName = focused ? 'message-circle' : 'message-circle';
                        }

                        // You can return any component that you like here!
                        return <Feather name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen 
                    name="ProfileStack" 
                    component={ProfileStack} />
                <Tab.Screen 
                    name="ElectionStack" 
                    component={ElectionStack} />
                <Tab.Screen 
                    name="Discover" 
                    component={DiscoverScreen} />
                <Tab.Screen 
                    name="VideoFeed" 
                    component={VideoFeedScreen} />
                <Tab.Screen 
                    name="QuestionStack" 
                    component={QuestionStack} />
            </Tab.Navigator>
            </Host>
      </NavigationContainer>
    );
  }

  

export default Tabs;

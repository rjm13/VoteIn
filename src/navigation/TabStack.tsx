import React, {useEffect, useState} from 'react';
import { View, Image, Button } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from '../Screens/ProfileScreen';
import ElectionScreen from '../Screens/ElectionScreen';
import DiscoverScreen from '../Screens/DiscoverScreen';
import VideoFeedScreen from '../Screens/VideoFeedScreen';
import QuestionFeedScreen from '../Screens/QuestionFeedScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Logo() {
    return (
        <Image
            style={{ width: 40, height: 25 }}
            source={require('../../assets/voteinlogo.png')}
        />
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
                            <Feather.Button 
                                name='more-vertical'
                                size={20}
                                color='black'
                                backgroundColor='#fff'
                                style={{ paddingRight: 15 }}
                                onPress={() => {}}
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

const Tabs = () => {



    return (
        <NavigationContainer>
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

                        if (route.name === 'Profile') {
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
                        else if (route.name === 'QuestionFeed') {
                            iconName = focused ? 'message-circle' : 'message-circle';
                        }

                        // You can return any component that you like here!
                        return <Feather name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen 
                    name="Profile" 
                    component={ProfileScreen} />
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
                    name="QuestionFeed" 
                    component={QuestionFeedScreen} />
            </Tab.Navigator>
      </NavigationContainer>
    );
  }

  

export default Tabs;

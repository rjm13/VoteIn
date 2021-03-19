import React from 'react';
import { View, Text } from 'react-native';

const DATA = [
    {
        office: 'President',
        data: [
            {
                id: '1',
                name: 'Joeseph Biden',
                officelevel: 'Federal',
                avatar: {uri: 'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg'},
                endorsements: '42',
                agree: '65%',
                selected: true,
                endorsed: true,  
            },
            {
                id: '2',
                name: 'Lyin Ted Cruz',
                officelevel: 'Federal',
                avatar: {uri: 'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg'},
                endorsements: '42',
                agree: '65%',
                selected: true,
                endorsed: true,  
            },
            {
                id: '3',
                name: 'Kanye West',
                officelevel: 'Federal',
                avatar: {uri: 'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg'},
                endorsements: '42',
                agree: '65%',
                selected: true,
                endorsed: true,  
            }
        ]
    },
    {
        office: 'Senator',
        data: [
            {
                id: '1',
                name: 'Beto Rouke',
                officelevel: 'Federal',
                avatar: {uri: 'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg'},
                endorsements: '42',
                agree: '65%',
                selected: true,
                endorsed: true,  
            },
            {
                id: '2',
                name: 'Lyin Ted Cruz',
                officelevel: 'Federal',
                avatar: {uri: 'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg'},
                endorsements: '42',
                agree: '65%',
                selected: true,
                endorsed: true,  
            }
        ]
    },
    {
        office: 'Railroad Commissioner',
        data: [
            {
                id: '1',
                name: 'Guy Whoneedstogo',
                officelevel: 'State',
                avatar: {uri: 'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg'},
                endorsements: '42',
                agree: '65%',
                selected: true,
                endorsed: true,  
            },
            {
                id: '2',
                name: 'Notherguy Whoneedstogo',
                officelevel: 'State',
                avatar: {uri: 'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg'},
                endorsements: '42',
                agree: '65%',
                selected: true,
                endorsed: true,  
            }
        ]
    },
    {
        office: 'House Representative',
        data: [
            {
                id: '1',
                name: 'Guy Whoneedstogo',
                officelevel: 'State',
                avatar: {uri: 'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg'},
                endorsements: '42',
                agree: '65%',
                selected: true,
                endorsed: true,  
            },
            {
                id: '2',
                name: 'Notherguy Whoneedstogo',
                officelevel: 'State',
                avatar: {uri: 'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg'},
                endorsements: '42',
                agree: '65%',
                selected: true,
                endorsed: true,  
            }
        ]
    },
];

export default DATA;
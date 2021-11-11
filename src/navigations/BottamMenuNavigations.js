import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ServiceScreen } from '../index';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import Svgi from "../assets/png/request.png"
import NIcon from 'react-native-vector-icons/Ionicons';
NIcon.loadFont();
import MIcon from 'react-native-vector-icons/MaterialIcons';
MIcon.loadFont();
import EIcon from 'react-native-vector-icons/FontAwesome';
EIcon.loadFont();

const Tab = createBottomTabNavigator();

export default function BottamMenuNavigations() {
    return (
        <Tab.Navigator
            activeColor="#004aad"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: 'white' }}
            
            screenOptions={{
                tabBarStyle: {height:65,padding:5,paddingBottom:5},
                headerShown:false
            }}
        >
            <Tab.Screen
                name="Home"
                component={ServiceScreen}
                options={{
                    
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <NIcon name="home" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="explore"
                component={ServiceScreen}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color }) => (
                        <MIcon name="explore" color={color} size={30} />
                    ),
                }}
            />

            <Tab.Screen
                name="Settings1"
                component={ServiceScreen}
                options={{
                    tabBarLabel: '',
                    // tabBarShowLabel:false,
                    tabBarIcon: ({ color }) => (
                        <View style={styles.maddleTabIcon}>
                            <MIcon name="explore" color="white" style={styles.meddleIconStyle} size={30} />
                            <Text style={styles.maddleTabText}>Request A </Text>
                            <Text style={styles.maddleTabText}>Quote</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Settings2"
                component={ServiceScreen}
                options={{
                    tabBarLabel: 'Saved',
                    tabBarIcon: ({ color }) => (
                        <MIcon name="saved-search" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="profiles"
                component={ServiceScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <EIcon name="user-circle-o" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    maddleTabIcon: {
        height: 77,
        width: 77,
        padding:7,
        borderRadius: 100,
        backgroundColor: '#004aad',
        marginBottom: 40,
        // paddingTop: 15
    },
    meddleIconStyle:{
        alignSelf:'center',

    },
    maddleTabText:{
        fontSize:10,
        fontWeight:'bold',
        alignSelf:'center',
        color:'white'
    }
});
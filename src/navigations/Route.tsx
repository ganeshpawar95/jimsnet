import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainStuck from './MainStack';
import AuthStuck from './AuthStack';

const Stack = createStackNavigator();

export default function RouteStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                {true ? MainStuck(Stack)
                    : AuthStuck(Stack)
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}
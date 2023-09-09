import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding1 from './Screens/OnBoarding/OnBoarding1';
import OnBoarding2 from './Screens/OnBoarding/OnBoarding2';
import OnBoarding3 from './Screens/OnBoarding/OnBoarding3';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name="OnBoarding1"
                    component={OnBoarding1}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="OnBoarding2"
                    component={OnBoarding2}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="OnBoarding3"
                    component={OnBoarding3}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
    )
}
    
export default AppNavigator;   
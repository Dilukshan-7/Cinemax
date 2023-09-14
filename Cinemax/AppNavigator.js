import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding1 from './Screens/OnBoarding/OnBoarding1';
import OnBoarding2 from './Screens/OnBoarding/OnBoarding2';
import OnBoarding3 from './Screens/OnBoarding/OnBoarding3';
import OnBoarding4 from './Screens/OnBoarding/OnBoarding4';
import OnBoarding5 from './Screens/OnBoarding/OnBoarding5';
import OnBoarding6 from './Screens/OnBoarding/OnBoarding6';
import Splash from './Screens/Start/Splash';
import Start from './Screens/Start/Start';
import Login from './Screens/Start/Login';
import SignUp from './Screens/Start/SignUp';
import ResetPassword from './Screens/Start/ResetPassword';
import Verification from './Screens/Start/Verification';
import NewPassword from './Screens/Start/NewPassword';
import Home from './Screens/Home/Home';

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
                <Stack.Screen
                    name="OnBoarding4"
                    component={OnBoarding4}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="OnBoarding5"
                    component={OnBoarding5}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="OnBoarding6"
                    component={OnBoarding6}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Start"
                    component={Start}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPassword}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Verification"
                    component={Verification}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="NewPassword"
                    component={NewPassword}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                />
                {/* <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="MovieDetails"
                    component={MovieDetails}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Download"
                    component={Download}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="MostPopular"
                    component={MostPopular}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="SerialDetails"
                    component={SerialDetails}
                    options={{headerShown: false}}
                /> */}
            </Stack.Navigator> 
    )
}
    
export default AppNavigator;   
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding1 from './Screens/OnBoarding/OnBoarding1';
import OnBoarding2 from './Screens/OnBoarding/Onboarding2';
import OnBoarding3 from './Screens/OnBoarding/OnBoarding3';
import OnBoarding4 from './Screens/OnBoarding/OnBoarding4';
import OnBoarding5 from './Screens/OnBoarding/OnBoarding5';
import OnBoarding6 from './Screens/OnBoarding/OnBoarding6';
import Home from './Screens/Home/Home';
import Splash from './Screens/Start/Splash';
import Start from './Screens/Start/Start';
import SignUp from './Screens/Start/SignUp';
import Login from './Screens/Start/Login';
import ResetPassword from './Screens/Start/ResetPassword';
import NewPassword from './Screens/Start/NewPassword';
import Verification from './Screens/Start/Verification';


const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
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
          name="Home"
          component={Home}
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
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
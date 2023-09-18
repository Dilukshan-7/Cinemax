//import React, {useEffect} from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import {initializeApp} from '@react-native-firebase/app';
//import auth from '@react-native-firebase/auth';
//import firebase from '@react-native-firebase/app';

const App = () => {
      //   useEffect(() => {
      //  Initialize Firebase when the app starts (ensure it only runs once)
  const firebaseConfig = {
      apiKey: 'AIzaSyAmyDzTEQ1rLfG1aJkpVT-JargyCguQyus',
      authDomain: 'cinemax-67759.firebaseapp.com',
      messagingSenderId: '405436679089',        
      projectId: 'cinemax-67759',
      appId: '1:405436679089:android:4b0e0bd8afcf657af47390',
      storageBucket: "cinemax-67759.appspot.com",
      //databaseURL: 'https://cinemax-e4f73-default-rtdb.firebaseio.com/',
    };
      // if (!firebase.apps.length) {
      //   try {
           initializeApp(firebaseConfig);
      //   } catch (error) {
      //     console.error('Firebase initialization error:', error);
      //   }

        //     const user = auth().currentUser;
        //   if (user) {
        //     console.log('User is signed in:', user.displayName);
        //   } else {
        //     console.log('User is not signed in');
        //   }
        //   }
        // }, []);

        return (
              <AppNavigator />  
        );
      //};

  // if (__DEV__) {
  //   // In development mode, log errors to the console
  //   console.error = (error) => {
  //     // You can customize how errors are displayed here
  //     console.log('Custom error logging:', error);
  //   };
  // }
}
AppRegistry.registerComponent(appName, () => App);
export default App;
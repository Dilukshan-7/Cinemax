/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Import Firebase
import {initializeApp} from '@react-native-firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyAHXFBUsqaZWAKTfmgxyDMOt_hh9y1DhWA',
    authDomain: 'cinemax-67759.firebaseapp.com',
    messagingSenderId: '405436679089',        
    projectId: 'cinemax-a882b',
    appId: '1:541205531236:android:76b13a063ede0dce2aad71',
    storageBucket: "cinemax-a882b.appspot.com",
    databaseURL: 'https://cinemax-a882b-default-rtdb.firebaseio.com/',  
};
         
    //initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);

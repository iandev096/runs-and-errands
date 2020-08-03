import { AppLoading } from 'expo';
import React, { useState } from 'react';
import { Asset } from 'expo-asset';
import { ThemeProvider } from 'react-native-elements';
import theme from './constants/theme';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { YellowBox, View } from 'react-native';
import { AuthProvider } from './store/contexts/Auth/AuthProvider';
import { MainNavigator } from './Navigators/MainNavigator';

export default function App() {
  const [isInitComplete, setIsInitComplete] = useState(false);

  if (!isInitComplete) {
    return (
      <AppLoading
        startAsync={asynInitTasks}
        onError={handleAsyncInitError}
        onFinish={() => setIsInitComplete(true)}
      />
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <MainNavigator />
      </AuthProvider>
    </ThemeProvider>
  );
}


async function asynInitTasks() {
  await Asset.loadAsync([
    require('./assets/logo.png')
  ]);

  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBYWRt3_41DQ4RmvJFa1jASJAWw-TDSn-g",
    authDomain: "runs-errands.firebaseapp.com",
    databaseURL: "https://runs-errands.firebaseio.com",
    projectId: "runs-errands",
    storageBucket: "runs-errands.appspot.com",
    messagingSenderId: "1091126136138",
    appId: "1:1091126136138:web:3667ff48996b86006a85b3"
  };

  firebase.initializeApp(firebaseConfig);

  YellowBox.ignoreWarnings(['Setting a timer']);

}

function handleAsyncInitError(error: any) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}


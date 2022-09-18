import { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
import { Subscription } from 'expo-modules-core';
import * as Notifications from 'expo-notifications';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';
import { Background } from './src/components/Background';

import './src/services/notificationConfig';
import { getPushNotificationToken } from './src/services/getPushNotificationToken';

export default function App() {
  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  useEffect(() => {
    getPushNotificationToken();
  }, []);

  useEffect(() => {
    getNotificationListener.current = Notifications
      .addNotificationReceivedListener(notification => {});

    responseNotificationListener.current = Notifications
      .addNotificationResponseReceivedListener(response => {});

    return () => {
      if (getNotificationListener.current && responseNotificationListener.current) {
        Notifications.removeNotificationSubscription(getNotificationListener.current);
        Notifications.removeNotificationSubscription(responseNotificationListener.current);
      }
    }
  }, []);

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {
        fontsLoaded ? <Routes /> : <Loading />
      }
    </Background>
  );
}

import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'
import { GameController } from 'phosphor-react-native';
import * as AuthSession from 'expo-auth-session'

import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import { THEME } from '../../theme';

export function SignIn() {

  async function handleDiscordSignIn() {

    const response = await AuthSession.startAsync({
      authUrl: "https://discord.com/api/oauth2/authorize?client_id=1023216165314625546&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40luiizsilverio%2Fesports&response_type=token&scope=identify"
    })

    console.log(response);
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading
          title="Entrar"
          subtitle="Encontre o seu duo e bora jogar."
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleDiscordSignIn}
        >
          <GameController
            color={THEME.COLORS.TEXT}
            size={20}
          />

          <Text style={styles.buttonTitle}>Entrar com Discord</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </Background>
  );
}
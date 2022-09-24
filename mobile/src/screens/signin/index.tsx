import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'
import { GameController } from 'phosphor-react-native';
import * as AuthSession from 'expo-auth-session'

import { ENV } from '../../utils/env';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import { THEME } from '../../theme';

export function SignIn() {
  const [usuario, setUsuario] = useState("");
  const [avatar, setAvatar] = useState("");

  const navigation = useNavigation()

  async function handleDiscordSignIn() {

    const response = await AuthSession.startAsync({
      authUrl: ENV.DISCORD_REDIRECT_URL
    })

    fetch('https://discord.com/api/users/@me', {
      headers: {
        'authorization': `Bearer ${response.params.access_token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setUsuario(data.username);
        setAvatar(`https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}`);

        setTimeout(() => {
          navigation.navigate('home');
        }, 1500);
      });
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

        {avatar && (
            <>
              <Image
                source={{ uri: avatar }}
                resizeMode="cover"
                style={styles.avatar}
              />
              <Text style={styles.username}>{usuario}</Text>
            </>
          )}

      </SafeAreaView>
    </Background>
  );
}
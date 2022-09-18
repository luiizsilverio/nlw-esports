import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'

import { Background } from '../../components/Background';
import { GameParams } from '../../@types/navigation';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';

import logoImg from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';
import { THEME } from '../../theme';

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordSel, setDiscordSel] = useState("");
  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function getDiscordUser(adsId: string) {
    fetch(`http://192.168.100.2:3333/ads/${adsId}/discord`)
    .then(response => response.json())
    .then(data => setDiscordSel(data.discord))
    .catch(erro => console.warn(erro));
  }

  useEffect(() => {
    fetch(`http://192.168.100.2:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
      .catch(erro => console.warn(erro));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.vazio} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard
              data={item}
              onConnect={() => getDiscordUser(item.id)}
            />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={duos.length === 0 ? styles.emptyList : styles.contentList}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>
              Esse jogo não tem nenhum anúncio ainda
            </Text>
          )}
        />

        <DuoMatch
          visible={discordSel.length > 0}
          discord={discordSel}
          onClose={() => setDiscordSel('')}
        />
      </SafeAreaView>
    </Background>
  );
}
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import './styles/main.css';
import 'tailwindcss/tailwind.css';
import logoImg from './assets/logo-nlw-esports.svg';
import GameBanner from './components/GameBanner';
import AdBanner from './components/AdBanner';
import { AdModal } from './components/AdModal';
import axios from 'axios';

interface IGame {
  id: string;
  title: string;
  bannerUrl: string;
  _count: { ads: number };
}

function App() {
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => setGames(response.data))
  }, []);

  return (
    <div className='max-w-[1280px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="NLW eSports" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {
          games.map(game => (
            <GameBanner
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
              key={game.id}
            />
          ))
        }
      </div>

      <Dialog.Root>
        <AdBanner />
        <AdModal />
      </Dialog.Root>

    </div>
  )
}

export default App

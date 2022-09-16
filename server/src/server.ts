import express from 'express';
import { PrismaClient } from "@prisma/client";
import cors from 'cors';
import { HourToMinutes } from './utils/hour-to-minutes';
import { v4 as uuid } from 'uuid'
import { MinutesToHour } from './utils/minutes-to-hour';

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient()

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          Ads: true
        } as any
      }
    }
  });

  return res.json(games);
})

app.get('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id;

  const ads = await prisma.ad.findMany({
    where: {
      gameId
    },
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return res.json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: MinutesToHour(ad.hourStart),
      hourEnd: MinutesToHour(ad.hourEnd)
    }
  }));
})

app.get('/ads/:id/discord', async (req, res) => {
  const adId = req.params.id;

  const ad = await prisma.ad.findUnique({
    select: {
      discord: true,
    },
    where: {
      id: adId
    }
  })

  // return res.json({ discord: ad.discord });
  return res.json(ad);
})

app.post('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id;
  const body = req.body;


  const ad = await prisma.ad.create({
    data: {
      id: uuid(),
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(","),
      hourStart: HourToMinutes(body.hourStart),
      hourEnd: HourToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel
    } as any
  })

  return res.json(ad);
})



app.listen(3333, () => console.log('NLW-eSports rodando na porta 3333'));

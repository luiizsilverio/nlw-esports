import express from 'express';

const app = express();

app.get('/games', (req, res) => {
  return res.json([]);
})

app.post('/ads', (req, res) => {
  return res.json([]);
})



app.listen(3333, () => console.log('E-Sports'));

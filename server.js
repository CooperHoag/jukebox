import app from "#app";
import db from "#db/client";
import { getAllTracks } from './db/queries/tracks.js';

const PORT = process.env.PORT ?? 3000;

await db.connect();

app.get('/tracks', async (req, res, next) => {
  const allTracks = await getAllTracks();
  res.send(allTracks);
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

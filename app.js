import { getAllTracks, getTracksById } from "#db/queries/tracks";
import { getAllPlaylists, getPlaylistById } from "#db/queries/playlists";
import express from "express";
const app = express();
app.use(express.json());

app.get('/tracks', async (req, res, next) => {
  const allTracks = await getAllTracks();
  res.send(allTracks);
});

// app.get('/tracks/:id', async (req, res, next) => {
//   const { id } = req.params;
//   const track = await getTracksById(id);
//   if (!track) return res.status(404).send("Track not found.");
//   res.send(track);
// });

app.get("/tracks/:id", async (req, res, next) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    return res.status(400).send({ error: "ID must be a valid number" });
  }

  try {
    const track = await getTracksById(id);
    if (!track) return res.status(404).send({ error: "Track not found" });

    res.send(track);
  } catch (error) {
    next(error);
  }
});

app.get('/playlists', async (req, res, next) => {
  const allPlaylists = await getAllPlaylists();
  res.send(allPlaylists);
});

app.post('/playlists', async (req, res, next) => {
  const { name, description} = req.body;

  if (!name || !description) {
    return res.status(400).send({ error: "Name and description are required" });
  }

  try {
    const newPlaylist = await createPlaylist(name, description);
    res.status(201).send(newPlaylist); 
  } catch (error) {
    next(error);
  }
});

app.get("/playlists/:id", async (req, res, next) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    return res.status(400).send({ error: "ID must be a valid number" });
  }

  try {
    const playlist = await getPlaylistById(id);
    if (!playlist) return res.status(404).send({ error: "Playlist not found" });

    res.send(playlist);
  } catch (error) {
    next(error);
  }
});

export default app;




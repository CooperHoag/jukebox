import db from "../db/client.js";
import { faker } from "@faker-js/faker";
import { createPlaylist } from "./queries/playlists.js";
import { createTrack } from "./queries/tracks.js";
import { createPlaylists_Tracks } from "./queries/playlists_tracks.js";

async function seed() {
  console.log("CONNECTING TO DB");
  await db.connect();
  console.log("SUCCESSFULLY CONNECTED TO DB");

  console.log("CREATING PLAYLISTS");
  const playlist1 = await createPlaylist(faker.music.album(), faker.music.genre());
  const playlist2 = await createPlaylist(faker.music.album(), faker.music.genre());
  const playlist3 = await createPlaylist(faker.music.album(), faker.music.genre());
  const playlist4 = await createPlaylist(faker.music.album(), faker.music.genre());
  const playlist5 = await createPlaylist(faker.music.album(), faker.music.genre());
  const playlist6 = await createPlaylist(faker.music.album(), faker.music.genre());
  const playlist7 = await createPlaylist(faker.music.album(), faker.music.genre());
  const playlist8 = await createPlaylist(faker.music.album(), faker.music.genre());
  const playlist9 = await createPlaylist(faker.music.album(), faker.music.genre());
  const playlist10 = await createPlaylist(faker.music.album(), faker.music.genre());
  console.log("SUCCESSFULLY CREATED PLAYLISTS");

  console.log("CREATING TRACKS");
  const track1 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track2 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track3 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track4 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track5 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track6 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track7 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track8 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track9 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track10 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track11 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track12 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track13 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track14 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track15 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track16 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track17 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track18 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track19 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  const track20 = await createTrack(faker.music.songName(), faker.number.int({ min: 120000, max: 300000 }));
  console.log("SUCCESSFULLY CREATED TRACKS");

  console.log("CREATING PLAYLISTS_TRACKS");
  await createPlaylists_Tracks(playlist1.id, track1.id);
  await createPlaylists_Tracks(playlist1.id, track2.id);
  await createPlaylists_Tracks(playlist2.id, track3.id);
  await createPlaylists_Tracks(playlist2.id, track4.id);
  await createPlaylists_Tracks(playlist3.id, track5.id);
  await createPlaylists_Tracks(playlist3.id, track6.id);
  await createPlaylists_Tracks(playlist4.id, track7.id);
  await createPlaylists_Tracks(playlist5.id, track8.id);
  await createPlaylists_Tracks(playlist6.id, track9.id);
  await createPlaylists_Tracks(playlist7.id, track10.id);
  await createPlaylists_Tracks(playlist8.id, track11.id);
  await createPlaylists_Tracks(playlist9.id, track12.id);
  await createPlaylists_Tracks(playlist10.id, track13.id);
  await createPlaylists_Tracks(playlist1.id, track14.id);
  await createPlaylists_Tracks(playlist2.id, track15.id);
  await createPlaylists_Tracks(playlist3.id, track16.id);
  await createPlaylists_Tracks(playlist4.id, track17.id);
  await createPlaylists_Tracks(playlist5.id, track18.id);
  await createPlaylists_Tracks(playlist6.id, track19.id);
  await createPlaylists_Tracks(playlist7.id, track20.id);
  console.log("SUCCESSFULLY CREATED PLAYLISTS_TRACKS");

  console.log("DISCONNECTING FROM DB");
  await db.end();
  console.log("SUCCESSFULLY DISCONNECTED FROM DB");
  console.log("🌱 Database seeded.");
}

seed();

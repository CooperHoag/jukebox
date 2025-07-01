import db from "#db/client";

export const createPlaylist = async (playlistName, playlistDescription) => {
  // console.log('CREATING PLAYLISTS');
  const sql =`
  INSERT INTO playlists (name, description)
  VALUES ($1, $2)
  RETURNING *
  `;
  const { rows: [ createdPlaylist ] }= await db.query(sql, [playlistName, playlistDescription]);
  return createdPlaylist;
}

export const getAllPlaylists = async () => {
  const sql = `
    SELECT *
    FROM playlists
  `;
  const { rows: currentPlaylists } = await db.query(sql)
  return currentPlaylists;
}

export const getPlaylistById = async (id) => {
  const sql = `
    SELECT *
    FROM playlists
    WHERE id = $1
  `;
  const { rows: [playlist] } = await db.query(sql, [id])
  return playlist;
}
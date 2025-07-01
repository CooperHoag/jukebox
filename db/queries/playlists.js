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
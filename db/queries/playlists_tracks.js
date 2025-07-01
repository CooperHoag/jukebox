import db from "#db/client";

export const createPlaylists_Tracks = async (playlistId, trackId) => {
  const sql = `
    INSERT INTO playlists_tracks (playlist_id, track_id)
    VALUES ($1, $2)
    RETURNING *
  `;
  const { rows: [ createdPlaylistsTracks ] } = await db.query(sql, [playlistId, trackId]);
  return createdPlaylistsTracks;
}
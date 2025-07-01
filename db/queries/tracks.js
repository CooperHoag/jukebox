import db from "#db/client";

export const createTrack = async (name, durationMs) => {
  const sql = `
    INSERT INTO tracks (name, duration_ms)
    VALUES ($1, $2)
    RETURNING *
  `;
  const{ rows: [createdTrack] } = await db.query(sql, [name, durationMs]);
  return createdTrack;
}

export const getAllTracks = async () => {
  const sql = `
    SELECT *
    FROM tracks
  `;
  const { rows: currentTracks } = await db.query(sql)
  return currentTracks;
}
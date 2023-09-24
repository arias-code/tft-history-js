import pg from 'pg';

let db = null;
if (!db) {
  const client = new pg.Client();
  await client.connect();
  db = client;
}

db._queryString = async function(string, args) {
  return (await db.query(string, args)).rows;
};

export default db;

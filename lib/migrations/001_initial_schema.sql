CREATE TABLE summoners (
  summoner_id TEXT PRIMARY KEY,
  summoner_name TEXT NOT NULL,
  league_points INT NOT NULL,
  rank TEXT NOT NULL,
  division TEXT NOT NULL,
  wins INT DEFAULT 0,
  losses INT DEFAULT 0,
  created_at DATE DEFAULT NOW()
);

CREATE TABLE summoners_history (
  uuid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  summoner_id TEXT NOT NULL REFERENCES summoners (summoner_id) ON DELETE CASCADE,
  summoner_name TEXT NOT NULL,
  league_points INT NOT NULL,
  rank TEXT NOT NULL,
  division TEXT NOT NULL,
  wins INT NOT NULL,
  losses INT NOT NULL,
  created_at DATE NOT NULL
);

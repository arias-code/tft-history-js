import api from './api.mjs';
import db from './db.mjs';

async function main() {
  const leagues = ['challenger', /* 'master', 'grandmaster' */];

  for (const league of leagues) {
    const { entries: leagueSummoners } = (await api.tft_league(league));
    for (const leagueSummoner of leagueSummoners) {
      const {
        summonerId,
        summonerName,
        leaguePoints,
        rank,
        wins,
        losses,
      } = leagueSummoner;

      // Check if we need to retrieve their puuid (new summoner)
      const { puuid } = (await api.tft_summoner_by_id(summonerId));
    }
  }
}

await main();
process.exit(0);

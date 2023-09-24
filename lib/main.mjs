import { tft_league } from './api.mjs';

async function main() {
  const leagues = ['challenger', 'master', 'grandmaster'];

  for (const league of leagues) {
    const { entries: leagueSummoners } = (await tft_league(league));
    for (const leagueSummoner of leagueSummoners) {
      const {
        summonerId,
        summonerName,
        leaguePoints,
        rank,
        wins,
        losses,
      } = leagueSummoner;
    }
  }
}

await main();

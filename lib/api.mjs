import "dotenv/config";
import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 3 });
axios.defaults.headers.common = { 'X-Riot-Token': process.env.RIOT_API_KEY ?? null };
console.log(process.env.RIOT_API_KEY);

// NA ONLY FOR BETA
// We are only supporting master+ for now, we can rework this later
export async function tft_league(division, retry=0) {
  try {
    const { data } = await axios.get("https://na1.api.riotgames.com/tft/league/v1/" + division);
  } catch (err) {
    if (retry <= 5) return await tft_league(division, retry+1);
    else throw new Error(err);
  }
}

import { config } from "dotenv";
config({ path: '../.env' });
import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 3 });
axios.defaults.headers.common = { 'X-Riot-Token': process.env.RIOT_API_KEY ?? null };

const api = {};

// NA ONLY FOR BETA
// We are only supporting master+ for now, we can rework this later
api.tft_league = async function(division, retry=0) {
  try {
    const { data } = await axios.get("https://na1.api.riotgames.com/tft/league/v1/" + division);
    return data;
  } catch (err) {
    if (retry <= 5) return await tft_league(division, retry+1);
    else throw new Error(err);
  }
}

api.tft_summoner_by_id = async function(id) {
  const { data } = await (axios.get("https://na1.api.riotgames.com/tft/summoner/v1/summoners/" + id));
  return data;
}

export default api;

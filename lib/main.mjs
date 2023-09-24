import { tft_league } from './api.mjs';

async function main() {
  const result = await tft_league("challenger");
  console.log(result);
}

await main();

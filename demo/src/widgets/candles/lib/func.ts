import type { Candle } from "@is-hiro/crypto-candles";

export const generateRandomCandle = (last: Candle): Candle => {
  const time = last.time + 1;

  const base = last.close;

  const maxChangePct = 0.05;
  const bodyDelta = (Math.random() * 2 - 1) * maxChangePct * base;

  const close = +(base + bodyDelta).toFixed(2);

  const openDelta = (Math.random() * 2 - 1) * maxChangePct * 0.7 * base;
  const open = +(base + openDelta).toFixed(2);

  const bodyHigh = Math.max(open, close);
  const bodyLow = Math.min(open, close);

  const wickTopPct = Math.random() * 0.02;
  const wickBottomPct = Math.random() * 0.02;

  const high = +(bodyHigh * (1 + wickTopPct)).toFixed(2);
  const low = +(bodyLow * (1 - wickBottomPct)).toFixed(2);

  const volume = Math.round(last.volume * (0.8 + Math.random() * 0.4));

  return {
    time,
    low,
    high,
    open,
    close,
    volume,
  };
};

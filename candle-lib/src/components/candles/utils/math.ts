import { Candle } from "@/model/candle";

type PriceRange = {
  min: number;
  max: number;
};
export const getPriceRange = (candles: Candle[]): PriceRange => {
  let min = Infinity;
  let max = -Infinity;

  candles.forEach((c) => {
    if (c.low < min) min = c.low;
    if (c.high > max) max = c.high;
  });

  if (!Number.isFinite(min) || !Number.isFinite(max) || min === max) {
    min = min || 0;
    max = max || min + 1;
  }

  return { min, max };
};

export const priceToY = (
  price: number,
  minPrice: number,
  maxPrice: number,
  height: number,
): number => {
  const t = (price - minPrice) / (maxPrice - minPrice);

  return height - t * height;
};

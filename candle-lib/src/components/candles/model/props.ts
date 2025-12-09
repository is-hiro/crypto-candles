import { Candle } from "@/model/candle";
import { CSSProperties } from "react";

export type CandleOptions = {
  bullColor: string;
  bearColor: string;
  width: number;
};

export type Options = {
  gap: number;
  background: string;
  candle: CandleOptions;
};

export interface ICandlesProps {
  candles: Candle[];
  width?: number;
  height?: number;
  options?: Partial<Options>;
  style?: CSSProperties;
}

export type OptionsInput = Partial<Options> & {
  candle?: Partial<CandleOptions>;
};

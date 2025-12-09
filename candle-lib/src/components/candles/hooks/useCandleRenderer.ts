import { useEffect, useMemo, useRef } from "react";
import { getPriceRange, priceToY } from "@/components/candles/utils/math";
import { Candle } from "@/model/candle";
import { Options, OptionsInput } from "@/components/candles/model/props";

type ICandleRendererProps = {
  candles: Candle[];
  width?: number;
  height?: number;
  options: OptionsInput;
  offsetX?: number;
};

const DEFAULT_SETTING: Options = {
  background: "transparent",
  gap: 4,
  candle: {
    bullColor: "green",
    bearColor: "red",
    width: 8,
  },
};

export const useCandleRenderer = ({
  candles,
  width = 400,
  height = 200,
  offsetX = 0,
  options,
}: ICandleRendererProps) => {
  const ref = useRef<HTMLCanvasElement>(null);

  const config = useMemo<Options>(() => {
    return {
      ...DEFAULT_SETTING,
      ...options,
      candle: {
        ...DEFAULT_SETTING.candle,
        ...options?.candle,
      },
    };
  }, [options]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { background, gap, candle } = config;
    const { min, max } = getPriceRange(candles);

    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);

    const rawGap = gap;
    const rawWidth = config.candle.width;
    const gapNum = Number(rawGap);
    const candleWidth = Number(rawWidth);
    const stepX = candleWidth + gapNum;
    const contentWidth = candles.length * stepX;
    const minOffset = Math.min(0, width - contentWidth);
    const maxOffset = 0;

    ctx.translate(Math.max(minOffset, Math.min(maxOffset, offsetX)), 0);

    candles.forEach((c, idx) => {
      const color = c.close >= c.open ? candle.bullColor : candle.bearColor;

      const xCenter = stepX * idx + stepX / 2;
      const bodyTopPrice = Math.max(c.open, c.close);
      const bodyBottomPrice = Math.min(c.open, c.close);

      const bodyTopY = priceToY(bodyTopPrice, min, max, height);
      const bodyBottomY = priceToY(bodyBottomPrice, min, max, height);
      const bodyHeight = bodyBottomY - bodyTopY;

      const wickTopY = priceToY(c.high, min, max, height);
      const wickBottomY = priceToY(c.low, min, max, height);

      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(xCenter + candleWidth / 2, wickTopY);
      ctx.lineTo(xCenter + candleWidth / 2, wickBottomY);
      ctx.stroke();

      ctx.fillStyle = color;
      ctx.fillRect(xCenter, bodyTopY, candleWidth, bodyHeight);
    });
  }, [offsetX, candles, width, height, config]);

  return ref;
};

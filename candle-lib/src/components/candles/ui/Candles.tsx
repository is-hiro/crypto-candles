import "./Candles.css";
import { ICandlesProps } from "@/components/candles/model/props";
import { useCandleRenderer } from "@/components/candles/hooks/useCandleRenderer";
import { useDrag } from "@/components/candles/hooks/useDrag";

export const Candles = ({
  candles,
  options = {},
  height = 200,
  width = 200,
  style,
}: ICandlesProps) => {
  const { handlePointerDown, handlePointerMove, endDrag, offsetX } = useDrag();
  const ref = useCandleRenderer({
    candles,
    height,
    width,
    offsetX,
    options,
  });

  return (
    <canvas
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      style={style}
      width={width}
      height={height}
      ref={ref}
    />
  );
};

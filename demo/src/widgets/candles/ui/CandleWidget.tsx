import { type Candle, Candles } from "@is-hiro/crypto-candles";
import { candlesList } from "@/shared/data/candles.ts";
import { Card } from "@/shared/ui/card";
import { useState } from "react";
import { OptionsForm } from "@/widgets/candles/ui/OptionsForm.tsx";
import type { Options } from "@/shared/model/candle.ts";
import styles from "./styles.module.scss";
import { Button } from "@/shared/ui/button";
import { generateRandomCandle } from "@/widgets/candles/lib/func.ts";

export const CandleWidget = () => {
  const [candles, setCandles] = useState<Candle[]>(candlesList);
  const [options, setOptions] = useState<Options>({
    gap: 4,
    background: "transparent",
    candle: {
      bullColor: "#a8ed6d",
      bearColor: "#f17067",
      width: 8,
    },
  });
  const addRandomCandle = () => {
    setCandles((prev) => {
      const last = prev[prev.length - 1];
      const next = generateRandomCandle(last);
      return [...prev, next];
    });
  };
  return (
    <Card className={styles.widget}>
      <Candles width={500} height={400} candles={candles} options={options} />
      <Button className={styles.addCandle} onClick={addRandomCandle}>
        +
      </Button>
      <div className={styles.line} />
      <OptionsForm
        candles={candles}
        options={options}
        setOptions={setOptions}
        setCandles={setCandles}
      />
    </Card>
  );
};

import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";
import type { Options } from "@/shared/model/candle.ts";
import { Input } from "@/shared/ui/input";
import { type Candle } from "@is-hiro/crypto-candles";
type Props = {
  options: Options;
  candles: Candle[];
  setOptions: Dispatch<SetStateAction<Options>>;
  setCandles: Dispatch<SetStateAction<Candle[]>>;
};

export const OptionsForm = ({ options, setOptions }: Props) => {
  const changeCandleOption = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setOptions((prev) => ({
      ...prev,
      candle: {
        ...prev.candle,
        [name]: value,
      },
    }));
  };
  const changeBaseOption = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.form}>
      <div className={styles.group}>
        <Input
          label="Bull color"
          name="bullColor"
          value={options.candle.bullColor}
          onChange={changeCandleOption}
        />
        <Input
          label="Bear color"
          name="bearColor"
          value={options.candle.bearColor}
          onChange={changeCandleOption}
        />
        <Input
          label="Width"
          name="width"
          min={8}
          value={options.candle.width}
          onChange={changeCandleOption}
          type={"number"}
        />
      </div>
      <div className={styles.group}>
        <Input
          label="Gap"
          name="gap"
          min={4}
          value={options.gap}
          onChange={changeBaseOption}
          type={"number"}
        />
        <Input
          label="Background"
          name="background"
          value={options.background}
          onChange={changeBaseOption}
        />
      </div>
    </div>
  );
};

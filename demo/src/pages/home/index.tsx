import styles from "./styles.module.scss";
import { CandleWidget } from "@/widgets/candles/ui/CandleWidget.tsx";
import { Header } from "@/shared/ui/header";

export const Home = () => {
  return (
    <div className={styles.Home}>
      <h1>Candle lib demo</h1>
      <Header />
      <CandleWidget />
    </div>
  );
};

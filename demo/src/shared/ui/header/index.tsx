import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <a href="https://github.com/is-hiro/crypto-candles.git">GitHub</a>
        <a href="https://www.npmjs.com/package/@is-hiro/crypto-candles">NPM</a>
        <a href="https://x.com/xkillhiro">X</a>
      </nav>
    </div>
  );
};

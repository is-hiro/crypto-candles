import type { FC, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type ColorInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input: FC<ColorInputProps> = ({ label, value, ...inputProps }) => {
  return (
    <label className={styles.root}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.field}>
        <input
          {...inputProps}
          value={value}
          className={styles.input}
          placeholder={inputProps.placeholder ?? "Input hex or color"}
        />
      </div>
    </label>
  );
};

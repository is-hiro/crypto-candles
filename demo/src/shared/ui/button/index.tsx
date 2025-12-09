import type { ButtonHTMLAttributes, FC } from "react";
import styles from "./styles.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`${styles.button} ${className ?? ""}`} {...props}>
      {children}
    </button>
  );
};

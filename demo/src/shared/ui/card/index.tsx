import styles from "./styles.module.scss";
import React from "react";
import clsx from "clsx";

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export const Card = ({ className, children }: Props) => (
  <div className={clsx(className, styles.Card)}>{children}</div>
);

import * as React from "react";

import styles from "./SpinLoader.module.scss";

type Props = {
  sizes?: number;
};

const SpinLoader = ({ sizes = 50 }: Props) => {
  return (
    <span style={{ width: sizes, height: sizes }} className={styles.loader} />
  );
};

export default SpinLoader;

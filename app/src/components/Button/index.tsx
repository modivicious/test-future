import React from "react";

import styles from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  [attrs: string]: any;
};

const Button = ({ children, onClick, ...attrs }: Props) => {
  return (
    <button className={styles.btn} onClick={onClick} {...attrs}>
      {children}
    </button>
  );
};

export default Button;

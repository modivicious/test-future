import * as React from "react";

import styles from "./Select.module.scss";

type Props = {
  id: string;
  label?: string;
  options: { name: string; value: string }[];
};

const Select = ({ id, label, options }: Props) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <select className={styles.select} id={id}>
        {options.map((option) => (
          <option key={option.name} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

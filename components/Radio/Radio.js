import React from "react";
import styles from "./style.module.scss";

const Radio = ({ selected, value }) => {
  return (
    <span className={`${styles["radio-outer-circle"]} ${value !== selected && styles["unselected"]}`}>
      <span className={`${styles["radio-inner-circle"]} ${value !== selected && styles["unselected-circle"]}`} />
    </span>
  );
};

export default Radio;

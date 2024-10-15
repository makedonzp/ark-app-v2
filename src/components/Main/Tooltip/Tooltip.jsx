import React from "react";
import styles from "./Tooltip.module.css";

const Tooltip = ({ text, children }) => {
  return (
    <div className={styles.tooltip_container}>
      {children}
      <div className={styles.tooltip}>{text}</div>
    </div>
  );
};

export default Tooltip;

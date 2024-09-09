import React from "react";
import styles from "./BurgerMenu.module.css";

const BurgerMenu = ({ isOpen, onClick }) => {
  return (
    <div className={styles.burger}>
      <div
        className={`${styles.burger__menu} ${isOpen ? styles.open : ""}`}
        onClick={onClick}
        role="button"
        aria-label="Открыть меню"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        <div className={styles.burger__menu_line}></div>
      </div>
    </div>
  );
};

export default BurgerMenu;

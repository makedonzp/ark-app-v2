import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav role="navigation" aria-label="Основное меню навигации">
      <ul className={styles.menu}>
        <li className={styles.menu__list}>
          <Link to="/new" className={styles.menu__link} tabIndex={0}>
            Новостройки
          </Link>
        </li>
        <li className={styles.menu__list}>
          <Link to="/plots" className={styles.menu__link} tabIndex={0}>
            Участки
          </Link>
        </li>
        <li className={styles.menu__list}>
          <Link to="/services" className={styles.menu__link} tabIndex={0}>
            Услуги
          </Link>
        </li>
        <li className={styles.menu__list}>
          <Link to="/about" className={styles.menu__link} tabIndex={0}>
            О нас
          </Link>
        </li>
        <li className={styles.menu__list}>
          <Link to="/contacts" className={styles.menu__link} tabIndex={0}>
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}

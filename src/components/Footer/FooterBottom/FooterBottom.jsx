import React from "react";
import styles from "./FooterBottom.module.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FooterBottom() {
  return (
    <Row
      className={styles.footer__row}
      role="navigation"
      aria-label="Нижняя часть подвала"
    >
      <Col className={styles.footer__col_left}>
        <p className={styles.footer__copyright}>© 2024 Все права защищены</p>
      </Col>
      <Col className={styles.footer__col_center}>
        <ul className={styles.footer__menu}>
          <li className={styles.footer__list}>
            <Link to="/new" className={styles.footer__links} tabIndex={0}>
              Новостройки
            </Link>
          </li>
          <li className={styles.footer__list}>
            <Link to="/plots" className={styles.footer__links} tabIndex={0}>
              Участки
            </Link>
          </li>
          <li className={styles.footer__list}>
            <Link to="/services" className={styles.footer__links} tabIndex={0}>
              Услуги
            </Link>
          </li>
          <li className={styles.footer__list}>
            <Link to="/about" className={styles.footer__links} tabIndex={0}>
              О нас
            </Link>
          </li>
          <li className={styles.footer__list}>
            <Link to="/contacts" className={styles.footer__links} tabIndex={0}>
              Контакты
            </Link>
          </li>
        </ul>
      </Col>
      <Col className={styles.footer__col_right}>
        <Link to="/confeditial" className={styles.footer__link} tabIndex={0}>
          <p className={styles.footer__copyright}>
            Политика конфиденциальности
          </p>
        </Link>
      </Col>
    </Row>
  );
}

import React from "react";
import styles from "./FooterTop.module.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import telegram_icon from "../../../assets/telegram_icon.webp";
import whatsapp_icon from "../../../assets/whatsapp_icon.webp";
import footer_call_icon from "../../../assets/footer_call_icon.webp";
import instagram_icon from "../../../assets/instagram_icon.webp";
import vk_icon from "../../../assets/vk_icon.webp";

export default function FooterTop() {
  return (
    <Row
      className={styles.footer__row}
      role="navigation"
      aria-label="Социальные сети и контакты"
    >
      <Col md={4} className={styles.footer__col}>
        <ul className={styles.footer__socials_menu}>
          <li className={styles.footer__socials_list}>
            <Link
              to="https://t.me/ARK_Agency"
              className={styles.footer__socials_link}
              tabIndex={0}
            >
              <img src={telegram_icon} alt="Telegram" />
            </Link>
          </li>
          <li className={styles.footer__socials_list}>
            <Link
              to="https://wa.me/+79786920164"
              className={styles.footer__socials_link}
              tabIndex={0}
            >
              <img src={whatsapp_icon} alt="WhatsApp" />
            </Link>
          </li>
          <li className={styles.footer__socials_list}>
            <Link
              to="tel:+7 (978) 692–01–64"
              className={styles.footer__socials_link}
              tabIndex={0}
            >
              <img src={footer_call_icon} alt="Позвонить" />
            </Link>
          </li>
          <li className={styles.footer__socials_list}>
            <a
              href="https://www.instagram.com/ark.crimea"
              className={styles.footer__socials_link}
              tabIndex={0}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram_icon} alt="instagram" />
            </a>
          </li>
          <li className={styles.footer__socials_list}>
            <a
              href="https://vk.com/ark_crimea"
              target="_blank"
              className={styles.footer__socials_link}
              tabIndex={0}
              rel="noopener noreferrer"
            >
              <img src={vk_icon} alt="ВКонтакте" />
            </a>
          </li>
        </ul>
      </Col>
      <Col md={4} className={styles.footer__title_col}>
        <h1 className={styles.footer__title}>АРК</h1>
        <p className={styles.footer__subtitle}>
          Агентство Риэлтерского Консалтинга
        </p>
      </Col>
      <Col md={4} className={styles.footer__call}>
        <Link
          to="tel:+7 (978) 692–01–64"
          className={styles.footer__link}
          tabIndex={0}
        >
          <p className={styles.footer__phone}>+7 (978) 692–01–64</p>
        </Link>
      </Col>
    </Row>
  );
}

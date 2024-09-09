import React from "react";
import styles from "./SideMenu.module.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${styles.sideMenu} ${isOpen ? styles.open : ""}`}
      role="navigation"
      aria-label="Боковое меню"
    >
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Закрыть меню"
        tabIndex={0}
      >
        &times;
      </button>
      <div className={styles.menuContent}>
        <Container>
          <Row>
            <Col>
              <Link onClick={onClose} to="/" tabIndex={isOpen ? 0 : -1}>
                Главная
              </Link>
              <Link onClick={onClose} to="/new" tabIndex={isOpen ? 0 : -1}>
                Новостройки
              </Link>
              <Link onClick={onClose} to="/plots" tabIndex={isOpen ? 0 : -1}>
                Участки
              </Link>
              <Link onClick={onClose} to="/services" tabIndex={isOpen ? 0 : -1}>
                Услуги
              </Link>
              <Link onClick={onClose} to="/about" tabIndex={isOpen ? 0 : -1}>
                О нас
              </Link>
              <Link onClick={onClose} to="/contacts" tabIndex={isOpen ? 0 : -1}>
                Контакты
              </Link>
              <Link onClick={onClose} to="/hot-form" tabIndex={isOpen ? 0 : -1}>
                Заполнить заявку
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SideMenu;

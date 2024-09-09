import React from "react";
import styles from "./Button.module.css";
import { Col, Row } from "react-bootstrap";

export default function Button({ scrollToForm }) {
  return (
    <Row className={styles.row_btn}>
      <Col className={styles.col_btn}>
        <button
          onClick={scrollToForm}
          className={styles.button}
          aria-label="Бесплатная консультация"
          tabIndex={0}
        >
          Бесплатная консультация
        </button>
      </Col>
    </Row>
  );
}

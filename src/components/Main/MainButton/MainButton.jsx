import React from "react";
import styles from "./MainButton.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MainButton({ scrollToForm }) {
  return (
    <Container fluid className={styles.main__container}>
      <Container>
        <Row className={styles.main__row}>
          {/* <Col md={12}>
            <h1 className={styles.main__title}>Крым.</h1>
          </Col> */}
          <Col md={8}>
            <p className={styles.main__subtitle}>
              С нами вы найдете подходящее жилье или участок в Крыму. Мы
              обеспечиваем прозрачность условий и поддержку на каждом этапе
              сделки
            </p>
          </Col>
          <Col md={4} className={styles.main__col_btn}>
            <Link
              to="#"
              onClick={scrollToForm}
              className={styles.main__button}
              role="button"
              aria-label="Связаться с нами"
              tabIndex={0}
            >
              Связаться с нами
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

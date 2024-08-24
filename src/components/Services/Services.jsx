import React from "react";
import styles from "./Services.module.css";
import { Col, Container, Row } from "react-bootstrap";

export default function Services() {
  return (
    <Container fluid className={styles.services_fluid}>
      <Container fluid className={styles.services}>
        <Container className={styles.services__container}>
          <Row className={styles.services__row}>
            <Col md={12} className={styles.services__col}>
              <h1 className={styles.services__title}>
                Услуги <span className={styles.services__title_color}>арк</span>
              </h1>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className={styles.services__row_slider}>
            <ul>
              <li>
                <p>Специалисты из Крыма</p>
              </li>
              <li>
                <p>Опыт работы 10 лет</p>
              </li>
              <li>
                <p>Опыт работы 10 лет</p>
              </li>
              <li>
                <p>Опыт работы 10 лет</p>
              </li>
            </ul>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

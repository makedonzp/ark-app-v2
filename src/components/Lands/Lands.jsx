import React from "react";
import styles from "./Lands.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "./Slider/Slider";
import Advantages from "./Advantages/Advantages";
import Choise from "./Choise/Choise";

export default function Lands() {
  return (
    <Container fluid className={styles.lands_fluid}>
      <Container fluid className={styles.lands}>
        <Container className={styles.lands__container}>
          <Row className={styles.lands__row}>
            <Col md={12} className={styles.lands__col}>
              <h1 className={styles.lands__title}>Ведущие застройщики Крыма</h1>
            </Col>
            <Col md={12} className={styles.lands__col}>
              <p className={styles.lands__subtitle}>
                Мы работаем только с проверенными застройщиками
              </p>
            </Col>
          </Row>
        </Container>
        <Row className={styles.lands__row_slider}>
          <Slider />
        </Row>
      </Container>
      <Advantages />
      <Container fluid className={styles.lands__container_map}>
        <Choise />
      </Container>
    </Container>
  );
}

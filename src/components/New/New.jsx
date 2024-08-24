import React from "react";
import styles from "./New.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "./Slider/Slider";
import Advantages from "./Advantages/Advantages";

export default function New() {
  return (
    <Container fluid className={styles.new_fluid}>
      <Container fluid className={styles.new}>
        <Container className={styles.new__container}>
          <Row className={styles.new__row}>
            <Col md={12} className={styles.new__col}>
              <h1 className={styles.new__title}>Ведущие застройщики Крыма</h1>
            </Col>
            <Col md={12} className={styles.new__col}>
              <p className={styles.new__subtitle}>
                Мы работаем только с проверенными застройщиками
              </p>
            </Col>
          </Row>
        </Container>
        <Row className={styles.new__row_slider}>
          <Slider />
        </Row>
      </Container>
      <Advantages />
    </Container>
  );
}

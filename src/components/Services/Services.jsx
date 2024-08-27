import React from "react";
import styles from "./Services.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "./Button/Button";
import Form from "../Main/Form/Form";
import Head from "../Services/Head/Head";
import Realtor from "../Services/Realtor/Realtor";
import Selling from "../Services/Selling/Selling";
import Legal from "../Services/Legal/Legal";
import Credit from "../Services/Credit/Credit";

export default function Services() {
  const formRef = React.useRef(null);
  const sellRef = React.useRef(null);
  const realtorRef = React.useRef(null);
  const legalRef = React.useRef(null);

  const scrollToForm = (e) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToSale = () => {
    if (sellRef.current) {
      sellRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToRealtor = () => {
    if (realtorRef.current) {
      realtorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const scrollToLegal = () => {
    if (legalRef.current) {
      legalRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

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
        <Container className={styles.services__center}>
          <Row className={styles.services__row_center}>
            <Col md={12} className={styles.services__col_center}>
              <ul className={styles.services__list_center}>
                <li className={styles.services__item_center}>
                  <button className={styles.button} onClick={scrollToSale}>
                    <p className={styles.services__text_center}>
                      Продать недвижимость
                    </p>
                  </button>
                </li>
                <li className={styles.services__item_center}>
                  <button className={styles.button} onClick={scrollToRealtor}>
                    <p className={styles.services__text_center}>
                      Риелторские услуги
                    </p>
                  </button>
                </li>
                <li className={styles.services__item_center}>
                  <Link to="#">
                    <p className={styles.services__text_center}>Оценка</p>
                  </Link>
                </li>
                <li className={styles.services__item_center}>
                  <Link to="#">
                    <p className={styles.services__text_center}>
                      Ипотечный центр
                    </p>
                  </Link>
                </li>
                <li className={styles.services__item_center}>
                  <button className={styles.button} onClick={scrollToLegal}>
                    <p className={styles.services__text_center}>
                      Юридические услуги
                    </p>
                  </button>
                </li>
              </ul>
            </Col>
          </Row>
          <Button scrollToForm={scrollToForm} />
        </Container>
      </Container>
      <Head />
      <Realtor id="realtor" ref={realtorRef} />
      <Selling id="selling" ref={sellRef} />
      <Legal scrollToForm={scrollToForm} id="legal" ref={legalRef} />
      <Credit />
      <Form id="form" formRef={formRef} />
    </Container>
  );
}

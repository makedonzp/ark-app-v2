import React, { useRef } from "react";
import styles from "./MainTop.module.css";
import { Container, Row, Col } from "react-bootstrap";
import arrow_down from "../../../assets/arrow_down_header_bottom.webp";
import { Link } from "react-router-dom";

export default function MainTop({ scrollToForm }) {
  const linkRef = useRef(null);

  return (
    <Container
      fluid
      className={styles.main__container}
      role="banner"
      aria-label="Главный баннер"
    >
      <Row className={styles.main__row}>
        <Col className={styles.main__col}>
          <h1 className={styles.main__title}>
            <span>АРК</span> — Ваш проводник в крымской недвижимости
          </h1>
        </Col>
        {/* <Col className={styles.main__col_agency}>
          <p
            className={
              styles.main__subtitle + " " + styles.main__subtitle_agency
            }
          >
            
          </p>
        </Col>
        <Col className={styles.main__col + " " + styles.main__col_realtor}>
          <p
            className={
              styles.main__subtitle + " " + styles.main__subtitle_realtor
            }
          >
            
          </p>
        </Col> */}
      </Row>
      <Row className={styles.main__row_bottom}>
        <Col className={styles.main__col_personal}>
          <p className={styles.main__text_personal}>Комфорт</p>
          <p className={styles.main__text_security}>Качество</p>
          <p className={styles.main__text_transparency}>Надёжность</p>
        </Col>
        <Col
          md={12}
          sm={12}
          className={
            styles.main__first_description_wrapper + " " + styles.arrow_section
          }
        >
          <Link
            itemProp="url"
            itemScope
            itemType="http://schema.org/URL"
            className={styles.main__first_description_link}
            ref={linkRef}
            onClick={scrollToForm}
            tabIndex={0}
            aria-label="Прокрутить вниз"
          >
            <img
              src={arrow_down}
              className={styles.arrow}
              itemProp="image url"
              alt="Стрелка вниз"
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

import React, { useEffect, useRef, useState } from "react";
import styles from "./Lands.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "./Slider/Slider";
import Advantages from "./Advantages/Advantages";
import Map from "./Map/Map";
import Form from "../Main/Form/Form";

const Lands = ({ data }) => {
  const formRef = useRef(null);
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    if (data) {
      const cityData = data.map((item) => ({
        city: item.name,
        plot_card_bg: item.plot_card_bg,
        path: item.path,
        plot_title: item.plot_title,
        plot_desc: item.plot_desc,
      }));
      setSliderData(cityData);
    }
  }, [data]);

  const scrollToForm = (e) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Container
      fluid
      className={styles.lands_fluid}
      role="main"
      aria-label="Основной контент страницы Участки в Крыму"
    >
      <Container fluid className={styles.lands}>
        <Container className={styles.lands__container}>
          <Row className={styles.lands__row}>
            <Col md={12} className={styles.lands__col}>
              <h1 className={styles.lands__title}>
                Участки с нами— ваш уютный уголок у моря
              </h1>
            </Col>
            <Col md={12} className={styles.lands__col}>
              <p className={styles.lands__subtitle}>
                Участок в Крыму — идеальный выбор для строительства загородного
                дома у моря. Удобное расположение, развитая инфраструктура и
                спокойная атмосфера создают отличные условия для комфортного
                проживания и отдыха.
              </p>
            </Col>
          </Row>
        </Container>
        <Row className={styles.lands__row_slider}>
          <Slider data={sliderData} />
        </Row>
      </Container>
      <Container fluid className={styles.lands__container_map}>
        <Map scrollToForm={scrollToForm} />
      </Container>
      <Advantages />
      <Form id="form" formRef={formRef} />
    </Container>
  );
};

export default Lands;

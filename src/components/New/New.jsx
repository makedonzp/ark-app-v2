import React, { useEffect, useRef, useState } from "react";
import styles from "./New.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "./Slider/Slider";
import Advantages from "./Advantages/Advantages";
import Map from "./Map/Map";
import Form from "../Main/Form/Form";

export default function New({ data }) {
  const formRef = useRef(null);
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    if (data) {
      const cityData = data.map((item) => ({
        city: item.name,
        complex_card_bg: item.complex_card_bg,
        path: item.path,
        title: item.title,
        desc: item.desc,
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
  // console.log(data);

  return (
    <Container fluid className={styles.new_fluid}>
      <Container fluid className={styles.new}>
        <Container className={styles.new__container}>
          <Row className={styles.new__row}>
            <Col md={12} className={styles.new__col}>
              <h1 className={styles.new__title}>
                Построй свой дом в Крыму с{" "}
                <span className={styles.new__title_color}>арк</span>
              </h1>
            </Col>
            <Col md={12} className={styles.new__col}>
              <p className={styles.new__subtitle}>
                {sliderData.length > 0 ? sliderData[0].desc : ""}
              </p>
            </Col>
          </Row>
        </Container>
        <Row className={styles.new__row_slider}>
          <Slider data={sliderData} />
        </Row>
      </Container>
      <Container fluid className={styles.new__container_map}>
        <Map scrollToForm={scrollToForm} />
      </Container>
      <Advantages />
      <Form id="form" formRef={formRef} />
    </Container>
  );
}

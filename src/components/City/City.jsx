import React from "react";
import styles from "./City.module.css";
import { useParams } from "react-router-dom";
import mockData from "../Data/Data"; // Импортируем моковые данные
import Slider from "../New/Slider/Slider"; // Импортируем компонент Slider
import { Container, Row, Col } from "react-bootstrap";

const City = () => {
  const { citySlug } = useParams();
  const cityData = mockData.find(
    (item) => item.path.split("/").pop() === citySlug
  );

  if (!cityData) {
    return <div>Город не найден</div>;
  }
  console.log(cityData);

  return (
    <Container fluid className={styles.city_fluid}>
      <Container
        fluid
        style={{ backgroundImage: `url(${cityData.image})` }}
        className={styles.city__container}
      >
        <Container>
          <Row className={styles.city__row}>
            <Col className={styles.city__col}>
              <h1>{cityData.title}</h1>
              <p>{cityData.desc}</p>
            </Col>
          </Row>
        </Container>
        <Slider data={cityData.complexes} />
      </Container>
      <Container className={styles.section__one_container}>
        <Container>
          <Row className={styles.section__one_row}>
            <Col md={12} className={styles.section__one_col}>
              <h1 className={styles.section__one_title}>
                {cityData.city} – жемчужина Черного моря
              </h1>
            </Col>
          </Row>
          <Row>
            <Col
              md={6}
              className={styles.section__one_img}
              style={{ backgroundImage: `url(${cityData.section_1[0].image})` }}
            ></Col>
            <Col md={6} className={styles.section__one_text}></Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};
// {E2EFFA}
export default City;

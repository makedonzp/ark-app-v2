import React from "react";
import styles from "./Complex.module.css";
import { useParams } from "react-router-dom";
import mockData from "../Data/Data"; // Импортируем моковые данные
import { Col, Container, Row } from "react-bootstrap";

const Complex = () => {
  const { citySlug, complexSlug } = useParams();
  const cityData = mockData.find(
    (item) => item.path.split("/").pop() === citySlug
  );

  if (!cityData) {
    return <div>Город не найден</div>;
  }

  const complexData = cityData.complexes.find(
    (item) => item.path.split("/").pop() === complexSlug
  );

  if (!complexData) {
    return <div>Жилой комплекс не найден</div>;
  }

  return (
    <Container className={styles.complex}>
      <Row>
        <Col>
          <h1>{complexData.name}</h1>
          <img src={cityData.image} alt={complexData.name} />
          {/* Дополнительный контент для страницы комплекса */}
        </Col>
      </Row>
    </Container>
  );
};

export default Complex;

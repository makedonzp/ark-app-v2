import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import styles from "./DataContext.module.css";
import { Col, Container, Row } from "react-bootstrap";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || {}
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dom-ark.com/api/full-data/");
        const newData = response.data;
        localStorage.setItem("data", JSON.stringify(newData));
        setData(newData);
      } catch (error) {
        console.error(error);
        setError("Ошибка при загрузке данных. Пожалуйста, попробуйте позже.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container className={styles.data__container}>
        <Row>
          <Col>
            <h1 className={styles.loading}>
              Загрузка данных, скорость вашего интернета может задерживать
              процесс, пожалуйста, подождите...
            </h1>
          </Col>
        </Row>
      </Container>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

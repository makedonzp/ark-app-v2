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
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (data) {
      const cityData = data.map((item) => ({
        city: item.name,
        complex_card_bg: item.complex_card_bg,
        path: item.path,
        new_title: item.new_title,
        new_desc: item.new_desc,
      }));

      // Устанавливаем данные только если они изменились
      setSliderData((prevData) => {
        if (JSON.stringify(prevData) !== JSON.stringify(cityData)) {
          return cityData;
        }
        return prevData;
      });

      // Загрузка изображений
      const loadImages = async () => {
        try {
          const imagePromises = cityData.map((item) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = item.complex_card_bg;
              img.onload = resolve;
              img.onerror = reject;
            });
          });

          await Promise.all(imagePromises);
          setImagesLoaded(true);
        } catch (error) {
          console.error("Ошибка при загрузке изображений:", error);
        }
      };

      loadImages();
    }
  }, [data]);

  const scrollToForm = (e) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  if (!imagesLoaded) {
    return <div>Загрузка изображений, пожалуйста, подождите...</div>;
  }

  return (
    <Container
      fluid
      className={styles.new_fluid}
      role="main"
      aria-label="Основной контент страницы Новостройки"
    >
      <Container fluid className={styles.new}>
        <Container className={styles.new__container}>
          {data.map((item, index) => (
            <Row key={index} className={styles.new__row}>
              <Col md={12} className={styles.new__col}>
                <h1 className={styles.new__title}>
                  {item.new_title || "Информация недоступна."}
                </h1>
              </Col>
              <Col md={12} className={styles.new__col}>
                <p className={styles.new__subtitle}>
                  {item.new_desc || "Информация недоступна."}
                </p>
              </Col>
            </Row>
          ))}
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

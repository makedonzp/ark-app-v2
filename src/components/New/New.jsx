import React, { useEffect, useRef, useState, useContext } from "react";
import styles from "./New.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "./Slider/Slider";
import Advantages from "./Advantages/Advantages";
import Map from "./Map/Map";
import Form from "../Main/Form/Form";
import { DataContext } from "../DataContext/DataContext";

export default function New() {
  const formRef = useRef(null);
  const [sliderData, setSliderData] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const data = useContext(DataContext);

  useEffect(() => {
    if (data && data.new) {
      // Проверка, что data и data.new существуют
      const cityData = data.new.map((item) => ({
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
    } else {
      console.error("Данные в контексте некорректны или отсутствуют:", data);
    }
  }, [data]);

  const scrollToForm = (e) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  if (!data || !data.new) {
    return <div>Данные не загружены</div>;
  }

  if (!imagesLoaded) {
    return (
      <h1 className={styles.loading}>
        Загрузка данных, скорость вашего интернета может задерживать процесс,
        пожалуйста, подождите...
      </h1>
    );
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
          <Row className={styles.new__row}>
            <Col md={12} className={styles.new__col}>
              <h1 className={styles.new__title}>
                Новостройки в Крыму — ваш ключ к морской мечте
              </h1>
            </Col>
            <Col md={12} className={styles.new__col}>
              <p className={styles.new__subtitle}>
                Новостройки в Крыму— это современное жилье у моря с продуманной
                инфраструктурой. Комфортные квартиры в новых жилых комплексах
                сочетают удобство городской жизни и близость к чистым пляжам.
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

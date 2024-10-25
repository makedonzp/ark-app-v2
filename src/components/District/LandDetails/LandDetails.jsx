import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./LandDetails.module.css";
import LandSlider from "../LandSlider/LandSlider";
import Form from "../../Main/Form/Form";

const LandDetails = () => {
  const { citySlug, districtSlug, landSlug } = useParams();
  const formRef = useRef(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      // Проверяем наличие данных в localStorage
      const cachedData = localStorage.getItem("data");
      if (cachedData) {
        setData(JSON.parse(cachedData).plots);
        setLoading(false);
        return;
      }

      // Если данных нет в localStorage, делаем запрос к серверу
      try {
        const response = await fetch("https://dom-ark.com/api/full-data/");
        const result = await response.json();
        setData(result.plots);

        // Сохраняем данные в localStorage
        localStorage.setItem("data", JSON.stringify(result));
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [citySlug, districtSlug, landSlug]); // Зависимость от параметров для перезагрузки данных при изменении

  const scrollToForm = (e) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  if (loading) {
    return (
      <h1 className={styles.loading}>
        Загрузка данных, скорость вашего интернета может задерживать процесс,
        пожалуйста, подождите...
      </h1>
    );
  }

  if (!data) {
    return <div>Данные не загружены</div>;
  }

  // Найдем город по citySlug
  const cityData = data?.find(
    (item) => item.path && item.path.split("/").pop() === citySlug
  );

  if (!cityData) {
    // console.log("Город не найден:", citySlug);
    return <div>Город не найден</div>;
  }

  // Проверяем, есть ли массив plots у cityData
  if (!cityData.plots || !Array.isArray(cityData.plots)) {
    console.error(
      "Массив участков (plots) отсутствует или имеет неверную структуру"
    );
    return <div>Участки для данного города отсутствуют</div>;
  }

  // Найдем район по districtSlug
  const districtData = cityData.plots?.find(
    (item) => item.path && item.path.split("/").pop() === districtSlug
  );

  if (!districtData) {
    // console.log("Район не найден:", districtSlug);
    return <div>Район не найден</div>;
  }

  // Найдем участок по landSlug
  const landData = districtData.lands?.find((item) => item.path === landSlug);

  if (!landData) {
    console.log("Участок не найден:", landSlug);
    return <div>Участок не найден</div>;
  }

  // Получаем данные для слайдера из landData
  const sliderData = landData.slider || [];
  const landImages = landData?.sections[0] || [];
  // console.log(landData);

  return (
    <Container
      fluid
      className={styles.landDetails}
      role="main"
      aria-label="Детали участка"
    >
      <Container fluid className={styles.landDetails__slider_container}>
        <LandSlider data={sliderData} />
      </Container>
      <Container className={styles.landDetails__container}>
        <Row>
          <Col md={12}>
            <h1 className={styles.landDetails__title}>
              Тип участка {landImages.title}
            </h1>
            <h1 className={styles.landDetails__title}>
              Площадь: {parseFloat(landData.area).toString()} соток
            </h1>
          </Col>
          <Col md={12} className={styles.landDetails__subtitle_col}>
            <h2 className={styles.landDetails__subtitle}>
              {districtData.district}
            </h2>
          </Col>
        </Row>
        <Row className={styles.landDetails__image_row}>
          <Col className={styles.landDetails__image_col_wrapper}>
            <Col
              className={styles.landDetails__image_col}
              style={{ backgroundImage: `url(${landImages.image_1})` }}
              aria-label="Изображение участка"
            ></Col>
          </Col>
          <Col className={styles.landDetails__image_col_wrapper}>
            <Col
              className={styles.landDetails__image}
              style={{ backgroundImage: `url(${landImages.image_2})` }}
              aria-label="Изображение участка"
            ></Col>
            <Col
              className={styles.landDetails__image}
              style={{ backgroundImage: `url(${landImages.image_3})` }}
              aria-label="Изображение участка"
            ></Col>
          </Col>
        </Row>
        <Row className={styles.landDetails__address_row}>
          <Col className={styles.landDetails__address_col_desc}>
            <Col className={styles.landDetails__address_desc}>
              <h2 className={styles.dec_title}>{landData.title}</h2>
              <p className={styles.desc_text}>{landData.desk}</p>
            </Col>
          </Col>
          <Col className={styles.landDetails__details_col_description}>
            <ul className={styles.landDetails__details}>
              <li className={styles.landDetails__details_li}>
                <p className={styles.landDetails__details_p_desc}>
                  Тип участка:
                </p>
                <p className={styles.landDetails__details_p}>
                  {landData.land_type_display}
                </p>
              </li>
              <li className={styles.landDetails__details_li}>
                <p className={styles.landDetails__details_p_desc}>Цена: </p>
                <p className={styles.landDetails__details_p}>
                  от {parseInt(landData.price).toLocaleString()} ₽
                </p>
              </li>
              <li className={styles.landDetails__details_li}>
                <p className={styles.landDetails__details_p}>свет:</p>
                <p className={styles.landDetails__details_p}>
                  {landData.electricity}
                </p>
              </li>
              <li className={styles.landDetails__details_li}>
                <p className={styles.landDetails__details_p}>газ:</p>
                <p className={styles.landDetails__details_p}>{landData.gas}</p>
              </li>
              <li className={styles.landDetails__details_li}>
                <p className={styles.landDetails__details_p}>вода:</p>
                <p className={styles.landDetails__details_p}>
                  {landData.water}
                </p>
              </li>
              <li
                className={
                  styles.landDetails__details_li + " " + styles.desc__large
                }
              >
                <p className={styles.landDetails__details_p_desc}> </p>
              </li>
              <li>
                <button
                  onClick={scrollToForm}
                  className={styles.landDetails__button}
                  tabIndex={0}
                >
                  Получить консультацию
                </button>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Row>
        <Form id="form" formRef={formRef} />
      </Row>
    </Container>
  );
};

export default LandDetails;

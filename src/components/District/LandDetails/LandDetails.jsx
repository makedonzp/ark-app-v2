import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./LandDetails.module.css";
import LandSlider from "../LandSlider/LandSlider";
import Form from "../../Main/Form/Form";

const LandDetails = ({ data }) => {
  const { citySlug, districtSlug, landSlug } = useParams();
  const formRef = useRef(null);

  const scrollToForm = (e) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Найдем город по citySlug
  const cityData = data?.find(
    (item) => item.path && item.path.split("/").pop() === citySlug
  );

  if (!cityData) {
    console.log("Город не найден:", citySlug);
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
    console.log("Район не найден:", districtSlug);
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
  console.log(landImages.title);

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
              Площадь:{" "}
              {parseFloat(landData.area)
                .toString()
                .replace(/\.?0+$/, "")}{" "}
              соток
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
              style={{ backgroundImage: `url(${landImages.image_1_url})` }}
              aria-label="Изображение участка"
            ></Col>
          </Col>
          <Col className={styles.landDetails__image_col_wrapper}>
            <Col
              className={styles.landDetails__image}
              style={{ backgroundImage: `url(${landImages.image_2_url})` }}
              aria-label="Изображение участка"
            ></Col>
            <Col
              className={styles.landDetails__image}
              style={{ backgroundImage: `url(${landImages.image_3_url})` }}
              aria-label="Изображение участка"
            ></Col>
          </Col>
        </Row>
        <Row className={styles.landDetails__address_row}>
          <Col className={styles.landDetails__address_col}>
            <Col
              className={styles.landDetails__address}
              style={{ backgroundImage: `url(${landImages.image_4_url})` }}
            >
              {/* <p className={styles.landDetails__address_p}>
                Участок в районе {districtData.name}
              </p> */}
              {/* <img
                className={styles.landDetails__image_sector}
                src={landImages.image_4_url}
                alt="Изображение участка"
              /> */}
            </Col>
            {/* <Col className={styles.landDetails__address}>
              <p className={styles.landDetails__address_p}>
                Участок в городе {cityData.name}
              </p>
              <img
                className={styles.landDetails__image_sector}
                src={landData.image_5_url}
                alt="Изображение участка"
              />
            </Col> */}
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
                <p className={styles.landDetails__details_p_desc}>Описание: </p>
              </li>
              <li className={styles.landDetails__details_li}>
                <p className={styles.landDetails__details_p}>
                  Участок в СНТ — отличное место для строительства вашего
                  загородного дома. Тихое окружение, доступная инфраструктура и
                  близость к природе делают его идеальным для отдыха и
                  постоянного проживания.
                </p>
              </li>
              <li>
                <button
                  onClick={scrollToForm}
                  className={styles.landDetails__button}
                  tabIndex={0}
                >
                  Забронировать
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

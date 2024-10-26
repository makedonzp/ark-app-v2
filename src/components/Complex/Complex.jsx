import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Complex.module.css";
import ApartmentsCards from "./ApartmentsCards/ApartmentsCards";
import Form from "../Main/Form/Form";
import ComplexSlider from "./ComplexSlider/ComplexSlider";

const Complex = ({ type }) => {
  const { complexSlug, citySlug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      // Проверяем наличие данных в localStorage
      const cachedData = localStorage.getItem("data");
      if (cachedData) {
        setData(JSON.parse(cachedData).new);
        setLoading(false);
        return;
      }

      // Если данных нет в localStorage, делаем запрос к серверу
      try {
        const response = await fetch("https://dom-ark.com/api/full-data/");
        const result = await response.json();
        setData(result.new);

        // Сохраняем данные в localStorage
        localStorage.setItem("data", JSON.stringify(result));
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [citySlug, complexSlug]); // Зависимость от citySlug и complexSlug для перезагрузки данных при изменении

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
  const cityData = data.find(
    (item) => item.path && item.path.split("/").pop() === citySlug
  );

  if (!cityData) {
    return <div>Город не найден</div>;
  }

  const complexData = cityData[type].find(
    (item) => item.path.split("/").pop() === complexSlug
  );

  if (!complexData) {
    return <div>Жилой комплекс не найден</div>;
  }
  // console.log(complexData);

  // Найти самое меньшее значение price
  const minPrice = complexData.apartments
    ? Math.min(
        ...complexData.apartments.flatMap((apartment) =>
          apartment.sections.map((section) => parseFloat(section.price))
        )
      )
    : "Нет данных";

  return (
    <Container
      fluid
      className={styles.complex}
      role="main"
      aria-label="Информация о жилом комплексе"
    >
      <Container fluid className={styles.complex__slider_container}>
        <div className={styles.complex__slider_text}>
          <h1 className={styles.complex__title}>{complexData.name}</h1>
          <p className={styles.complex__subtitle}>{cityData.name}</p>
        </div>
        <ComplexSlider data={complexData.slider} />
      </Container>
      <Container className={styles.complex__container}>
        <Row className={styles.complex__row}>
          <Col className={styles.complex__col + " " + styles.border_right}>
            <p className={styles.complex__details}>Нас. пункт</p>
            <p className={styles.complex__details_desc}>{cityData.name}</p>
          </Col>
          <Col className={styles.complex__col + " " + styles.border_right}>
            <p className={styles.complex__details}>ЖК в Городе</p>
            <p className={styles.complex__details_desc}>
              {cityData[type].length}
            </p>
          </Col>
          <Col className={styles.complex__col}>
            <p className={styles.complex__details}>Стоимость</p>
            <p className={styles.complex__details_desc}>
              от {minPrice.toLocaleString()}
            </p>
          </Col>
        </Row>
      </Container>
      {complexData.apartments && (
        <Container className={styles.apartments__container}>
          <Row>
            <Col className={styles.apartments__col_title}>
              <h1 className={styles.apartments__title}>
                Квартиры в {complexData.name}
              </h1>
            </Col>
          </Row>
          <Container>
            <Row className={styles.apartments__cards_wrapper}>
              <ApartmentsCards
                apartments={complexData.apartments}
                citySlug={citySlug}
                complexSlug={complexSlug}
              />
            </Row>
          </Container>
        </Container>
      )}
      <Container className={styles.description_container}>
        <Row>
          <Col>
            <h1 className={styles.complex_title_text}>{complexData.title}</h1>
            <p className={styles.complex_desc}>{complexData.desk}</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className={styles.apartments__text_container_fluid}>
        <Container className={styles.apartments__text_container}>
          <Row className={styles.apartments__row}>
            <Col className={styles.apartments__col_title} md={12}>
              <h1 className={styles.apartments__buy_title}>Как купить?</h1>
            </Col>
          </Row>
          <Row className={styles.apartments__row}>
            <Col className={styles.apartments__col_text} md={6}>
              <p className={styles.apartments__text__detail}>100% оплата</p>
              <p className={styles.apartments__text__detail_desc}>
                Оплата стоимости с вашего счета на реквизиты, указанные в
                договоре.
              </p>
            </Col>
            <Col className={styles.apartments__col_text} md={6}>
              <p className={styles.apartments__text__detail}>ипотека</p>
              <p className={styles.apartments__text__detail_desc}>
                Поможем выбрать, рассчитаем и подадим заявку на одобрение
                ипотечного кредита.
              </p>
            </Col>
          </Row>
          <Row className={styles.apartments__row}>
            <Col className={styles.apartments__col_text} md={6}>
              <p className={styles.apartments__text__detail}>Рассрочка 0%</p>
              <p className={styles.apartments__text__detail_desc}>
                Мы предоставляем несколько вариантов удобной рассрочки с
                первоначальным взносом от 20% и без удорожания.
              </p>
            </Col>
            <Col className={styles.apartments__col_text} md={6}>
              <p className={styles.apartments__text__detail}>
                Материнский капитал
              </p>
              <p className={styles.apartments__text__detail_desc}>
                Вы можете использовать материнский (семейный) капитал для
                первого взноса по ипотеке или погашения ипотечного кредита.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Form />
    </Container>
  );
};

export default Complex;

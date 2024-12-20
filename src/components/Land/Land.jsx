import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Land.module.css";
import LandSlider from "./LandSlider/LandSlider";
import Form from "../Main/Form/Form";
import DistrictCards from "../District/DistrictCards/DistrictCards";

const Land = () => {
  const { citySlug, districtSlug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      // Проверяем наличие данных в localStorage
      const cachedData = localStorage.getItem("data");
      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      // Если данных нет в localStorage, делаем запрос к серверу
      try {
        const response = await fetch("https://dom-ark.com/api/full-data/");
        const result = await response.json();
        setData(result);

        // Сохраняем данные в localStorage
        localStorage.setItem("data", JSON.stringify(result));
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <h1 className={styles.loading}>
        Загрузка данных, скорость вашего интернета может задерживать процесс,
        пожалуйста, подождите...
      </h1>
    );
  }

  if (!data || !data.plots) {
    return <div>Данные не загружены</div>;
  }

  const cityData = data.plots.find(
    (item) => item.path && item.path.split("/").pop() === citySlug
  );

  if (!cityData) {
    return <div>Город не найден</div>;
  }

  const districtData = cityData.plots.find(
    (item) => item.path.split("/").pop() === districtSlug
  );

  if (!districtData) {
    return <div>Район не найден</div>;
  }

  // Найти самое меньшее значение price
  const minPrice = districtData.lands
    ? Math.min(...districtData.lands.map((land) => parseFloat(land.price)))
    : "Нет данных";

  return (
    <Container
      fluid
      className={styles.land}
      role="main"
      aria-label="Информация о районе"
    >
      <Container fluid className={styles.land__slider_container}>
        <div className={styles.land__slider_text}>
          <h1 className={styles.land__title}>{districtData.district}</h1>
          <p className={styles.land__subtitle}>{cityData.name}</p>
        </div>
        <LandSlider data={districtData.slider} />
      </Container>
      <Container className={styles.land__container}>
        <Row className={styles.land__row}>
          <Col className={styles.land__col + " " + styles.border_right}>
            <p className={styles.land__details}>Нас. пункт</p>
            <p className={styles.land__details_desc}>{cityData.name}</p>
          </Col>
          <Col className={styles.land__col + " " + styles.border_right}>
            <p className={styles.land__details}>Районов в работе</p>
            <p className={styles.land__details_desc}>
              {districtData.lands ? districtData.lands.length : 0}
            </p>
          </Col>
          <Col className={styles.land__col}>
            <p className={styles.land__details}>Стоимость</p>
            <p className={styles.land__details_desc}>
              от {minPrice.toLocaleString()}
            </p>
          </Col>
        </Row>
      </Container>
      {districtData.lands && (
        <Container className={styles.builds__container}>
          {districtData.lands && (
            <Container className={styles.lands__container}>
              <Row>
                <Col className={styles.lands__col_title}>
                  <h1 className={styles.lands__title}>
                    Участки в {districtData.name || districtData.district}
                  </h1>
                </Col>
              </Row>
              <Container>
                <Row className={styles.lands__cards_wrapper}>
                  <DistrictCards
                    lands={districtData.lands}
                    citySlug={citySlug}
                    districtSlug={districtSlug}
                  />
                </Row>
              </Container>
            </Container>
          )}
        </Container>
      )}
      <Container className={styles.description_container}>
        <Row>
          <Col>
            <h1 className={styles.complex_title_text}>{districtData.title}</h1>
            <p className={styles.complex_desc}>{districtData.desk}</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className={styles.builds__text_container_fluid}>
        <Container className={styles.builds__text_container}>
          <Row className={styles.builds__row}>
            <Col className={styles.builds__col_title} md={12}>
              <h1 className={styles.builds__buy_title}>Как купить?</h1>
            </Col>
          </Row>
          <Row className={styles.builds__row}>
            <Col className={styles.builds__col_text} md={6}>
              <p className={styles.builds__text__detail}>100% оплата</p>
              <p className={styles.builds__text__detail_desc}>
                Оплата стоимости с вашего счета на реквизиты, указанные в
                договоре.
              </p>
            </Col>
            <Col className={styles.builds__col_text} md={6}>
              <p className={styles.builds__text__detail}>ипотека</p>
              <p className={styles.builds__text__detail_desc}>
                Поможем выбрать, рассчитаем и подадим заявку на одобрение
                ипотечного кредита.
              </p>
            </Col>
          </Row>
          <Row className={styles.builds__row}>
            <Col className={styles.builds__col_text} md={6}>
              <p className={styles.builds__text__detail}>Рассрочка 0%</p>
              <p className={styles.builds__text__detail_desc}>
                Мы предоставляем несколько вариантов удобной рассрочки с
                первоначальным взносом от 20% и без удорожания.
              </p>
            </Col>
            <Col className={styles.builds__col_text} md={6}>
              <p className={styles.builds__text__detail}>Материнский капитал</p>
              <p className={styles.builds__text__detail_desc}>
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

export default Land;

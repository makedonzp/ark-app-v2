import React, { forwardRef } from "react";
import styles from "./Realtor.module.css";
import { Col, Container, Row } from "react-bootstrap";
import num_1 from "../../../assets/num_1.webp";
import num_2 from "../../../assets/num_2.webp";
import num_3 from "../../../assets/num_3.webp";
import num_4 from "../../../assets/num_4.webp";
import num_5 from "../../../assets/num_5.webp";
import num_6 from "../../../assets/num_6.webp";

const Realtor = forwardRef(({ id }, ref) => {
  return (
    <Container
      className={styles.realtor}
      role="region"
      aria-label="Услуги риэлтора"
    >
      <Row className={styles.realtor__row}>
        <Col md={12} className={styles.realtor__col}>
          <div className={styles.wrapper}>
            <h1 className={styles.realtor__title}>Услуги риэлтора</h1>
          </div>
        </Col>
      </Row>
      <Container className={styles.content__container}>
        <Row className={styles.content__row}>
          <Col ref={ref} id={id} className={styles.content__col}>
            <ul className={styles.content__list}>
              <li className={styles.content__item}>
                <img
                  className={styles.content__img}
                  src={num_1}
                  alt="Номер 1"
                />
                <p className={styles.content__text}>
                  Оценка рыночной стоимости объекта
                </p>
              </li>
              <li className={styles.content__item}>
                <img
                  className={styles.content__img}
                  src={num_2}
                  alt="Номер 2"
                />
                <p className={styles.content__text}>Предпродажная подготовка</p>
              </li>
              <li className={styles.content__item}>
                <img
                  className={styles.content__img}
                  src={num_3}
                  alt="Номер 3"
                />
                <p className={styles.content__text}>
                  Переговоры в интересах клиента
                </p>
              </li>
              <li className={styles.content__item}>
                <img
                  className={styles.content__img}
                  src={num_4}
                  alt="Номер 4"
                />
                <p className={styles.content__text}>
                  Точный подбор вариантов по потребностям
                </p>
              </li>
              <li className={styles.content__item}>
                <img
                  className={styles.content__img}
                  src={num_5}
                  alt="Номер 5"
                />
                <p className={styles.content__text}>
                  Профессиональная фотосъемка при продаже
                </p>
              </li>
              <li className={styles.content__item}>
                <img
                  className={styles.content__img}
                  src={num_6}
                  alt="Номер 6"
                />
                <p className={styles.content__text}>
                  Организация серии показов объектов недвижимости
                </p>
              </li>
            </ul>
          </Col>
          <Col
            className={styles.content__col_img + " " + styles.content__col}
            aria-label="Изображение услуг риэлтора"
          ></Col>
        </Row>
        <Row className={styles.payment__row}>
          <Col className={styles.payment__col}>
            <p className={styles.payment__text}>
              Размер комиссионного вознаграждения:
            </p>
          </Col>
        </Row>
        <Row className={styles.price__row}>
          <Col className={styles.price__col + " " + styles.price__col_first}>
            <p className={styles.price__text}>Продажа и покупка недвижимости</p>
            <p className={styles.price__text}>Аренда недвижимости</p>
          </Col>
          <Col className={styles.price__col}>
            <p className={styles.price__text}>
              3% от итоговой стоимости объекта, но не менее 100 тыс.руб
            </p>
            <p className={styles.price__text}>
              50% от ежемесячной арендной платы единоразово
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
});

export default Realtor;

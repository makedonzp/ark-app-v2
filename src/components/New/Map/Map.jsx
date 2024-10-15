import React, { useState } from "react";
import styles from "./Map.module.css";
import { Col, Container, Row } from "react-bootstrap";
import map__img from "../../../assets/map.webp";
import { Link } from "react-router-dom";

export default function Map({ scrollToForm }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const directions = [
    {
      id: 1,
      title: "Южный берег",
      number: "01",
      description: `Города: Ялта, Алушта, Севастополь, Гурзуф.
Южный берег — это курортный центр Крыма с живописными пляжами, историческими памятниками и развитой инфраструктурой. Отличное место для тех, кто хочет сочетать отдых с удобством городской жизни и доступом к культурным достопримечательностям.`,
    },
    {
      id: 2,
      title: "Западный берег",
      number: "02",
      description: `Города: Евпатория, Саки, Береговое.
Западный берег — это уютные курорты с песчаными пляжами и медицинскими учреждениями. Идеален для семей с детьми и тех, кто ценит тишину и комфорт.`,
    },
    {
      id: 3,
      title: "Южно–восточное побережье",
      number: "03",
      description: `Города: Феодосия, Коктебель, Курортное.
Южно-восточное побережье — это спокойные курорты с уединенными пляжами и живописной природой, идеальные для тех, кто ищет уединение и тишину вдали от туристических центров.`,
    },
    {
      id: 5,
      title: "Центральная часть полуострова",
      number: "04",
      description: `Города: Симферополь, Бахчисарай, Керчь.
Центральная часть — это удобный доступ к разным частям полуострова, с развивающейся инфраструктурой и интересными историческими памятниками. Идеально подходит для тех, кто ценит комфорт и спокойную атмосферу.`,
    },
  ];

  return (
    <Container
      className={styles.map}
      role="region"
      aria-label="Карта направлений поиска"
    >
      <Row>
        <Col>
          <h1 className={styles.map__title}>Направления поиска</h1>
        </Col>
      </Row>
      <Row className={styles.map__row}>
        <Col
          className={styles.map__img}
          style={{ backgroundImage: `url(${map__img})` }}
          aria-label="Карта Крыма с направлениями поиска"
        ></Col>
        <Col md={4}>
          <ul className={styles.map__list}>
            {directions.map((item, index) => (
              <li key={item.id} className={styles.map__item}>
                <div
                  className={styles.spoiler__item}
                  onClick={() => handleItemClick(index)}
                >
                  <p className={styles.map__text}>{item.title}</p>
                  <div className={styles.spoiler__content_wrapper}>
                    <p className={styles.map__text}>{item.number}</p>
                    <button
                      className={styles.spoiler__button}
                      aria-expanded={openIndex === index}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12">
                        <path
                          d="M1 4L6 9L11 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  className={`${styles.spoiler__content} ${
                    openIndex === index ? styles.open : ""
                  }`}
                  aria-hidden={openIndex !== index}
                >
                  <p className={styles.map__desc}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row className={styles.map__row_btn}>
        <Col className={styles.map__col_descr}>
          <p className={styles.map__description}>
            Наши опытные специалисты помогут вам четко определить все критерии
            поиска и подобрать дом вашей мечты, учитывая все ваши пожелания и
            предпочтения
          </p>
        </Col>
        <Col className={styles.map__col_btn}>
          <Link
            to="#"
            onClick={scrollToForm}
            className={styles.map__button}
            tabIndex={0}
          >
            Связаться с нами
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

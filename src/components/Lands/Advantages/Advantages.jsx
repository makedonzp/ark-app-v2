import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Advantages.module.css";
import WhyComponent from "../WhyComponent/WhyComponent";
import lands_img from "../../../assets/3d-rendering-house-model.webp";

const landsPreority = [
  {
    id: 1,
    title: "Комплексное обслуживание «под ключ»",
  },
  {
    id: 2,
    title: "Доступная цена и выгодные условия ипотеки",
  },
  {
    id: 3,
    title: "Гарантия законности сделки",
  },
  {
    id: 4,
    title: "Продажа вашей недвижимости",
  },
  {
    id: 5,
    title: "Поиск недвижимости",
  },
  {
    id: 6,
    title: "Выгодная инвестиция",
  },
];

export default function Advantages() {
  return (
    <Container
      fluid
      className={styles.advantages__content_details}
      role="region"
      aria-label="Преимущества покупки земельного участка"
    >
      <Container className={styles.advantages__content}>
        <WhyComponent bgr={lands_img} data={landsPreority}>
          Преимущество покупки земельного участка от{" "}
          <span className={styles.details__title_color}>арк</span>
        </WhyComponent>
      </Container>
    </Container>
  );
}

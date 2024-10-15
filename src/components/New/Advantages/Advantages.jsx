import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Advantages.module.css";
import WhyComponent from "../../Main/WhyComponent/WhyComponent";
import build_img from "../../../assets/view-city-with-apartment-buildings-green-vegetation.webp";
const buildsPreority = [
  {
    id: 1,
    title: "Обслуживание «под ключ»",
  },
  {
    id: 2,
    title: "Доступная цена и выгодные условия ипотеки",
  },
  {
    id: 3,
    title: "Современные технологии и дизайн",
  },
  {
    id: 4,
    title: "Гарантия законности сделки",
  },
  {
    id: 5,
    title: "Ремонт от застройщика ",
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
      aria-label="Преимущества покупки квартиры в новостройке"
    >
      <Container className={styles.advantages__content}>
        <WhyComponent bgr={build_img} data={buildsPreority}>
          Преимущество покупки квартиры в новостройке от{" "}
          <span className={styles.details__title_color}>арк</span>
        </WhyComponent>
      </Container>
    </Container>
  );
}

import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Advantages.module.css";
import WhyComponent from "../WhyComponent/WhyComponent";
import lands_img from "../../../assets/3d-rendering-house-model.webp";

const landsPreority = [
  {
    id: 1,
    title: "Расположение:",
    description:
      "Оцените удобство доступа к транспорту и инфраструктуре. Участки ближе к городам и курортам более ликвидны.",
  },
  {
    id: 2,
    title: "Цель использования:",
    description:
      "Определите, для чего нужен участок: для жилья, дачи или бизнеса, чтобы выбрать подходящий тип земли.",
  },
  {
    id: 3,
    title: "Экологические условия:",
    description:
      "Изучите близость к источникам загрязнения. Чистая экология важна для здоровья и комфортной жизни.",
  },
  {
    id: 4,
    title: "Права на землю:",
    description:
      "Проверьте юридическую чистоту участка и наличие всех необходимых документов.",
  },
  {
    id: 5,
    title: "Топография:",
    description:
      "Оцените рельеф и состав почвы. Это важно для строительства и озеленения.",
  },
  {
    id: 6,
    title: "Перспективы развития:",
    description:
      "Узнайте о планах застройки района, чтобы понять будущую стоимость земли.",
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
          Как выбрать участок под постройку дома в Крыму:
          <p className={styles.details__text}>
            Мы собрали краткие советы для Вас.
          </p>
        </WhyComponent>
      </Container>
    </Container>
  );
}

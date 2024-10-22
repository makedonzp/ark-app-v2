import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Advantages.module.css";
import WhyComponent from "../../Main/WhyComponent/WhyComponent";
import build_img from "../../../assets/view-city-with-apartment-buildings-green-vegetation.webp";
const buildsPreority = [
  {
    id: 1,
    title: "Выгодные инвестиции",
    description:
      "Новостройки в Крыму — это перспективная недвижимость с высокой ликвидностью. Растущий рынок и развитие инфраструктуры обеспечивают рост цен, а также гарантируют стабильный доход от аренды. Покупка квартиры в новостройке — это возможность выгодно вложить средства.",
  },
  {
    id: 2,
    title: "Юридическая прозрачность",
    description:
      "Мы тщательно проверяем все объекты на юридическую чистоту, чтобы вы могли быть уверены в безопасности сделки. А благодаря нашему сопровождению на всех этапах покупки, процесс становится простым и понятным.",
  },
  {
    id: 3,
    title: "Современная инфраструктура",
    description:
      "Жилые комплексы, которые мы представляем, продуманы до мелочей. Парковки, магазины, детские и спортивные площадки — всё это рядом с домом. Это гарантирует удобство и комфорт для всей семьи, а также экономит время и силы.",
  },
  {
    id: 4,
    title: "Качество и надежность",
    description:
      "Мы предлагаем только проверенные новостройки, построенные с использованием современных технологий и материалов. Каждая квартира готова для жизни сразу после завершения строительства, что исключает необходимость дополнительных вложений в ремонт.",
  },
  {
    id: 5,
    title: "Профессиональное сопровождение сделки",
    description:
      "От выбора квартиры до заключения сделки — наши специалисты помогут вам на каждом шаге. Мы обеспечиваем прозрачность и безопасность, решая все вопросы быстро и эффективно.",
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
          <p className={styles.details__text}>
            Агентство <span className={styles.details__title_color}>АРК</span> —
            это ваш надежный партнер в мире недвижимости, который поможет вам
            сделать правильный выбор, будь то инвестиция или покупка жилья для
            семьи.
          </p>
        </WhyComponent>
      </Container>
    </Container>
  );
}

import React, { useRef } from "react";
import styles from "./Main.module.css";
import MainTop from "./MainTop/MainTop";
import MainButton from "./MainButton/MainButton";
import MainCards from "./MainCards/MainCards";
import WhyComponent from "./WhyComponent/WhyComponent";
import crimea_img from "../../assets/Crimea_icon.webp";
import Cards from "../Main/Cards/Cards";
import { Col, Container, Row } from "react-bootstrap";
import Form from "../Main/Form/Form";
import shield from "../../assets/secure.webp";
import home from "../../assets/home.webp";
import peoples from "../../assets/peoples.webp";
import hands from "../../assets/hands.webp";

const buildsPreority = [
  {
    id: 1,
    title: "Солнце, море, лето круглый год",
  },
  {
    id: 2,
    title: "Мягкий климат",
  },
  {
    id: 3,
    title: "Природные условия",
  },
  {
    id: 4,
    title: "Доступность отдыха",
  },
  {
    id: 5,
    title: "Развитая инфраструктура",
  },
  {
    id: 6,
    title: "Возможность получения дохода",
  },
];

const staticCards = [
  {
    id: 1,
    title: "Более 16 лет успешной работы",
    description:
      "Через наше агентство прошло сотни успешных сделок различной сложности.",
    path: "/about",
    image: shield,
  },
  {
    id: 2,
    title: "АРК – гарант безопасности",
    description:
      "является гарантом безопасности на всех этапах сделки купли/продажи.",
    path: "/about",
    image: home,
  },
  {
    id: 3,
    title: "Экспертная команда",
    description:
      "профессионалы своего дела, которые работают с каждым клиентом от начала и до результата.",
    path: "/about",
    image: peoples,
  },
  {
    id: 4,
    title: "Клиентский  сервис",
    description:
      "Мы оказываем риэлторские, юридические услуги, сопровождение ипотеки  и другие услуги",
    path: "/about",
    image: hands,
  },
];

export default function Main() {
  const formRef = useRef(null);

  const scrollToForm = (e) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Container
      fluid
      className={styles.main}
      role="main"
      aria-label="Основной контент"
    >
      <MainTop scrollToForm={scrollToForm} />
      <MainButton scrollToForm={scrollToForm} />
      <MainCards />
      <Container>
        <WhyComponent
          bgr={crimea_img}
          first={buildsPreority[0].title}
          second={buildsPreority[1].title}
          third={buildsPreority[2].title}
          fourth={buildsPreority[3].title}
          fifth={buildsPreority[4].title}
          sixth={buildsPreority[5].title}
        >
          Почему Крым?
        </WhyComponent>
      </Container>
      <Container className={styles.cards__container}>
        <Row className={styles.cards__row}>
          <Col md={12} sm={12} className={styles.cards__title_section}>
            <h1 className={styles.cards__title}>Почему нам доверяют</h1>
          </Col>
          <Cards cards={staticCards} />
        </Row>
      </Container>
      <Form id="form" formRef={formRef} />

      {/* Schema.org разметка */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Агентство Риэлтерского Консалтинга АРК недвижимость",
          url: "https://arkcrimea.ru",
          description:
            "Агентство выполняет операции с недвижимостью, оформлению документов, консультации юристов в направлении, помощь в оформлении ипотек",
          contactPoint: {
            "@type": "ContactPoint",
            email: "agericon@gmail.com",
            telephone: "+79786920164",
            address: {
              "@type": "PostalAddress",
              streetAddress: "ул. Назукина 1",
              addressLocality: "Феодосия",
              addressRegion: "Крым",
              postalCode: "298100",
              addressCountry: "Россия",
            },
          },
          logo: "https://ark-dom.com/images/logo/g78.webp", // Замените на URL вашего логотипа
          sameAs: [
            "https://ваш-сайт.com/ссылка-на-facebook",
            "https://ваш-сайт.com/ссылка-на-twitter",
            "https://ваш-сайт.com/ссылка-на-instagram",
          ],
          potentialAction: {
            "@type": "SearchAction",
            target: "https://arkcrimea.ru/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </script>
    </Container>
  );
}

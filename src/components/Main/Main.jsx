import React, { useRef } from "react";
import styles from "./Main.module.css";
import MainTop from "./MainTop/MainTop";
import MainButton from "./MainButton/MainButton";
import MainCards from "./MainCards/MainCards";
import WhyComponent from "./WhyComponent/WhyComponent";
import crimea_img from "../../assets/beautiful-nature-landscape-with-black-sandy-beach-ocean.webp";
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
    title: "Климат и природа",
    description:
      "Крымский климат — это уникальная комбинация мягкой морской погоды и теплых солнечных дней, что делает регион идеальным для круглогодичного проживания и отдыха.",
  },
  {
    id: 2,
    title: "Высокий спрос на аренду",
    description:
      "Туристический поток в Крым стабильно увеличивается, что поддерживает высокий спрос на аренду недвижимости круглый год. Доход от сдачи жилья в аренду в новостройках может составлять от 10-12% годовых.",
  },
  {
    id: 3,
    title: "Постоянный рост цен на недвижимость",
    description:
      "Крымский рынок недвижимости демонстрирует устойчивый рост, особенно в новостройках на побережье. Жилье увеличивается в стоимости уже на стадии строительства, что может привести к росту капитала на 20-30% ещё до завершения объекта.",
  },
  {
    id: 4,
    title: "Престижные районы и новые проекты",
    description:
      "Среди современных жилых комплексов можно выбрать объекты в самых востребованных локациях: Ялта, Симферополь, Севастополь, Феодосия. Эти районы привлекают как туристов, так и тех, кто ищет жилье для постоянного проживания.",
  },
  {
    id: 5,
    title: "Развитая инфраструктура",
    description:
      "Развитие инфраструктуры — новых дорог, аэропортов, социальной сферы — повышает популярность региона для долгосрочного планирования.",
  },
  {
    id: 6,
    title: "Возможность получения дохода",
    description:
      "Приобретайте новостройки в Крыму сегодня, чтобы обеспечить себе стабильный доход завтра.",
  },
];

const staticCards = [
  {
    id: 1,
    title: "Многолетний опыт",
    description:
      "Работаем на рынке недвижимости Крыма с 2010 года, успешно решая задачи любой сложности.",
    path: "/about",
    image: shield,
  },
  {
    id: 2,
    title: "Гарантия безопасности",
    description:
      "Проверяем документы и сопровождаем сделки, исключая любые риски.",
    path: "/about",
    image: home,
  },
  {
    id: 3,
    title: "Экспертная команда",
    description:
      "Наши специалисты глубоко знают рынок и предлагают только проверенные решения.",
    path: "/about",
    image: peoples,
  },
  {
    id: 4,
    title: "Индивидуальный подход",
    description:
      "Каждый клиент получает персональные решения, адаптированные под его потребности.",
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
        <WhyComponent bgr={crimea_img} data={buildsPreority}>
          Почему Крым?
        </WhyComponent>
      </Container>
      <Container className={styles.cards__container}>
        <Row className={styles.cards__row}>
          <Col md={12} sm={12} className={styles.cards__title_section}>
            <h1 className={styles.cards__title}>Почему нам доверяют?</h1>
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

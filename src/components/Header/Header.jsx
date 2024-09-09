import React, { useState } from "react";
import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Logo from "../Header/Logo/Logo";
import Nav from "./Nav/Nav";
import Contants from "../Header/Contants/Contants";
import BurgerMenu from "../Header/BurgerMenu/BurgerMenu";
import SideMenu from "../Header/SideMenu/SideMenu";
import { Col } from "react-bootstrap";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container fluid className={styles.header}>
      <Container fluid className={styles.header__container}>
        <Row className={styles.header__row}>
          <Col>
            <Logo />
          </Col>
          {/* <Col>
            <Location />
          </Col> */}
          <Col>
            <Nav isOpen={isMenuOpen} />
          </Col>
          <Col md={3}>
            <Contants />
          </Col>
          <BurgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
        </Row>
      </Container>
      {isMenuOpen && <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />}

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
          logo: "https://ark-dom.com/images/logo/g78.png",
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

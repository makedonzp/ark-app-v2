import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./WhyComponent.module.css";
import { Col, Container, Row } from "react-bootstrap";

export default function WhyComponent({ children, bgr, data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container
      className={styles.why__container}
      role="article"
      aria-label="Почему Крым"
    >
      <Row className={styles.row_title_section}>
        <Col
          md={12}
          sm={12}
          className={styles.why__row_text + " " + styles.orderFirst}
        >
          <h3 className={styles.main__title} itemProp="about">
            {children}
          </h3>
        </Col>
        <Col
          itemProp="mainContentOfPage"
          itemScope
          itemType="http://schema.org/WebPageElement"
          className={styles.crimea__section + " " + styles.orderMiddle}
        >
          <div
            className={styles.crimea__icon}
            style={{ backgroundImage: `url(${bgr})` }}
            alt="Иконка Крыма"
          />
        </Col>
        <Col
          className={
            styles.why__row +
            " " +
            styles.why__row_desc +
            " " +
            styles.orderLast
          }
        >
          <ul className={styles.main__list}>
            {data.map((item, index) => (
              <li key={item.id} className={styles.main__list_item}>
                <div
                  className={styles.spoiler__item}
                  onClick={() => handleItemClick(index)}
                >
                  <p itemProp="headline" className={styles.main__list_title}>
                    {item.title}
                  </p>
                  <div className={styles.spoiler__header}>
                    <p className={styles.main__list_num}>{`0${index + 1}`}</p>
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
                  <p className={styles.main__text} itemProp="description">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

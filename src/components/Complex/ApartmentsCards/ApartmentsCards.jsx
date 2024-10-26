import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ApartmentsCards.module.css"; // Убедитесь, что у вас есть соответствующие стили
import { Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ApartmentsCards({ apartments, citySlug, complexSlug }) {
  const [sortBy, setSortBy] = useState("all"); // По умолчанию отображаем все квартиры

  if (!apartments || apartments.length === 0) {
    return <div>Нет доступных квартир</div>;
  }

  // Функция для сортировки квартир
  const sortApartments = (apartments, sortBy) => {
    if (sortBy === "all") {
      return apartments;
    } else if (sortBy === "studio") {
      return apartments.filter((apartment) => apartment.category === "studio");
    } else if (sortBy === "one_room") {
      return apartments.filter(
        (apartment) => apartment.category === "one_room"
      );
    } else if (sortBy === "two_room") {
      return apartments.filter(
        (apartment) => apartment.category === "two_room"
      );
    } else if (sortBy === "three_room") {
      return apartments.filter(
        (apartment) => apartment.category === "three_room"
      );
    } else if (sortBy === "price_asc") {
      return [...apartments].sort((a, b) => {
        const priceA = parseFloat(a.sections[0].price);
        const priceB = parseFloat(b.sections[0].price);
        return priceA - priceB;
      });
    } else if (sortBy === "price_desc") {
      return [...apartments].sort((a, b) => {
        const priceA = parseFloat(a.sections[0].price);
        const priceB = parseFloat(b.sections[0].price);
        return priceB - priceA;
      });
    }
    return apartments;
  };

  // Сортируем квартиры перед рендерингом
  const sortedApartments = sortApartments(apartments, sortBy);

  return (
    <>
      <Row className={styles.filter__name}>
        <Col className={styles.filter__name}>
          <Form.Group controlId="sortBy">
            <Form.Label className={styles.filter__name}>
              Фильтровать по:
            </Form.Label>
            <Form.Control
              as="select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="all">Все квартиры</option>
              <option value="studio">Студии</option>
              <option value="one_room">Однокомнатные</option>
              <option value="two_room">Двухкомнатные</option>
              <option value="three_room">Трёхкомнатные</option>
              <option value="price_asc">Цене (от дешевого к дорогому)</option>
              <option value="price_desc">Цене (от дорогого к дешевому)</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {sortedApartments.map((apartment, index) => {
        const section =
          apartment.sections && apartment.sections.length > 0
            ? apartment.sections[0]
            : null;
        const title = section ? section.title : "Нет данных";
        const area = section ? `${section.area} м²` : "Нет данных";
        const desk = apartment.desk || "Нет описания";
        const price = section
          ? `${parseInt(section.price).toLocaleString()}`
          : "Нет данных";

        return (
          <Col
            key={index} // Используйте индекс в качестве ключа
            className={styles.card_section}
            itemProp="mainContentOfPage"
            itemScope
            itemType="http://schema.org/BlogPosting"
            role="article"
            aria-label={`Квартира: ${title}`}
          >
            <h2 className={styles.card__title_text}>
              {title} ({area})
            </h2>
            <p className={styles.card__desc}>{desk}</p>
            <div className={styles.price__more_wrapper}>
              <p className={styles.card__price}>
                <span className={styles.of}>от</span> {price}{" "}
                <span className={styles.of}>₽</span>
              </p>
              <Link
                to={`/new/${citySlug}/${complexSlug}/${apartment.path}`}
                className={styles.card__btn}
                tabIndex={0}
              >
                <span className={styles.card__btn_text}>Подробнее</span>
              </Link>
            </div>
          </Col>
        );
      })}
    </>
  );
}

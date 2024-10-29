import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DistrictCards.module.css"; // Убедитесь, что у вас есть соответствующие стили
import { Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DistrictCards({ lands, citySlug, districtSlug }) {
  const [sortBy, setSortBy] = useState("all"); // По умолчанию отображаем все участки

  if (!lands || lands.length === 0) {
    return <div>Нет доступных участков</div>;
  }

  // Добавляем логирование для проверки данных в lands
  // console.log("Данные в lands:", lands);

  // Функция для сортировки участков
  const sortLands = (lands, sortBy) => {
    // console.log("Сортировка по:", sortBy);

    if (sortBy === "all") {
      // console.log("Все участки:", lands);
      return lands;
    } else if (sortBy === "СНТ") {
      const sntLands = lands.filter((land) => {
        // console.log(
        //   "Проверка участка:",
        //   land.land_type,
        //   land.land_type.toLowerCase() === "snt"
        // );
        return land.land_type.toLowerCase() === "snt";
      });
      // console.log("СНТ участки:", sntLands);
      return sntLands;
    } else if (sortBy === "ИЖС") {
      const ijsLands = lands.filter((land) => {
        // console.log(
        //   "Проверка участка:",
        //   land.land_type,
        //   land.land_type.toLowerCase() === "ijs"
        // );
        return land.land_type.toLowerCase() === "ijs";
      });
      // console.log("ИЖС участки:", ijsLands);
      return ijsLands;
    } else if (sortBy === "area") {
      const sortedByArea = [...lands].sort(
        (a, b) => parseFloat(a.area) - parseFloat(b.area)
      );
      // console.log("Участки, отсортированные по площади:", sortedByArea);
      return sortedByArea;
    } else if (sortBy === "price_asc") {
      const sortedByPriceAsc = [...lands].sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      // console.log(
      //   "Участки, отсортированные по цене (от дешевого к дорогому):",
      //   sortedByPriceAsc
      // );
      return sortedByPriceAsc;
    } else if (sortBy === "price_desc") {
      const sortedByPriceDesc = [...lands].sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      // console.log(
      //   "Участки, отсортированные по цене (от дорогого к дешевому):",
      //   sortedByPriceDesc
      // );
      return sortedByPriceDesc;
    }

    // console.log("Неизвестный тип сортировки:", sortBy);
    return lands;
  };

  // Сортируем участки перед рендерингом
  const sortedLands = sortLands(lands, sortBy);
  // console.log("Отсортированные участки:", sortedLands);

  return (
    <>
      <Row className={styles.filter__name}>
        <Col className={styles.filter__name}>
          <Form.Group controlId="sortBy">
            <Form.Label className={styles.filter__name}>
              Сортировать по:
            </Form.Label>
            <Form.Control
              as="select"
              value={sortBy}
              onChange={(e) => {
                // console.log("Изменение сортировки на:", e.target.value);
                setSortBy(e.target.value);
              }}
            >
              <option value="all">Все участки</option>
              <option value="СНТ">Только СНТ</option>
              <option value="ИЖС">Только ИЖС</option>
              <option value="area">Площади (соткам)</option>
              <option value="price_asc">Цене (от дешевого к дорогому)</option>
              <option value="price_desc">Цене (от дорогого к дешевому)</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {sortedLands.map((land, index) => {
        // console.log("Рендеринг карточки для участка:", land);
        const title = land.land_type_display + ":" || "Нет данных";
        const price = parseInt(land.price).toLocaleString();
        const area =
          parseInt(land.area).toLocaleString() + " сот " || "Нет данных";
        return (
          <Col
            key={index} // Используйте индекс в качестве ключа
            className={styles.card_section}
            itemProp="mainContentOfPage"
            itemScope
            itemType="http://schema.org/BlogPosting"
            role="article"
            aria-label={`Участки: ${title}`}
          >
            <h2 className={styles.card__title_text}>
              {title} {area}.
            </h2>
            <div className={styles.price__more_wrapper}>
              <p className={styles.card__price}>
                <span className={styles.of}>от</span> {price}{" "}
                <span className={styles.of}>₽</span>
              </p>
              <Link
                to={`/plots/${citySlug}/${districtSlug}/${land.path}`}
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

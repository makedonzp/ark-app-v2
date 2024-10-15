import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Cards.module.css";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tooltip from "../Tooltip/Tooltip";

export default function Cards({ cards }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (cards && cards.length > 0) {
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  }, [cards]);

  if (loading) {
    return <div className={styles.loader}></div>;
  }

  if (error) {
    return <div>Ошибка загрузки данных. Пожалуйста, попробуйте позже.</div>;
  }

  return (
    <>
      {cards.map((card) => {
        return (
          <Col
            key={card.id}
            className={styles.card_section}
            itemProp="mainContentOfPage"
            itemScope
            itemType="http://schema.org/BlogPosting"
          >
            <Tooltip text={card.description}>
              <div className={styles.card_content}>
                {card.image ? (
                  <img
                    src={card.image}
                    alt={`Иконка карточки ${card.title}`}
                    className={styles.card__icon}
                  />
                ) : (
                  <div>Изображение недоступно</div>
                )}
                <h2 className={styles.card__title_text} itemProp="headline">
                  {card.title}
                </h2>
                <Link to={card.path} className={styles.card__btn} tabIndex={0}>
                  <span className={styles.card__btn_text}>Подробнее</span>
                </Link>
              </div>
            </Tooltip>
          </Col>
        );
      })}
    </>
  );
}

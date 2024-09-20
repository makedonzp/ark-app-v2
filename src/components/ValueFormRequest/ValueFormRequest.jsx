import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ValueFormRequest.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import video from "../../assets/finish_page_bg.mp4";

export default function ValueFormRequest() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkFormSubmitted = () => {
      // Проверяем, была ли форма отправлена
      const isFormSubmitted = localStorage.getItem("formSubmitted");

      if (!isFormSubmitted) {
        // Если формы не было, перенаправляем на главную страницу
        // console.log("Form not submitted, redirecting to home");
        navigate("/");
      } else {
        // Удаляем флаг через 10 секунд
        setTimeout(() => {
          localStorage.removeItem("formSubmitted");
          // console.log("Removed formSubmitted key from localStorage");
        }, 10000);
      }
    };

    // Проверяем наличие ключа после 10 секунд
    setTimeout(checkFormSubmitted, 10000);

    // Проверяем наличие ключа сразу после загрузки страницы
    const isFormSubmitted = localStorage.getItem("formSubmitted");
    if (!isFormSubmitted) {
      // console.log("Form not submitted, redirecting to home");
      navigate("/");
    }
  }, [navigate]);

  return (
    <Container
      fluid
      className={styles.container__fluid}
      role="main"
      aria-label="Спасибо за заявку"
    >
      <video
        src={video}
        autoPlay
        loop
        muted
        className={styles.video_bg}
        aria-label="Фоновое видео"
      ></video>
      <Container className={styles.container}>
        <Row className={styles.row}>
          <Col className={styles.col}>
            <h3 className={styles.title}>Благодарим вас!</h3>
            <p className={styles.desc}>
              Наши сотрудники свяжутся с вами в ближайшее время.
            </p>
          </Col>
          <Col className={styles.phone}>
            <p className={styles.phone__text}>
              Также вы можете связаться с нами по номеру телефона:
            </p>
            <Link
              to="tel:+7 (978) 692–01–64"
              className={styles.phone__link}
              tabIndex={0}
            >
              +7 (978) 692–01–64
            </Link>
          </Col>
          <Col className={styles.button}>
            <Link to="/" className={styles.main__link} tabIndex={0}>
              Вернуться на главную
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

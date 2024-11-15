import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ValueFormRequest.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import video from "../../assets/finish_page_bg.mp4";

export default function ValueFormRequest() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkFormToken = () => {
      const tokenFromStorage = localStorage.getItem("formToken");
      const tokenFromState = location.state?.token;

      if (!tokenFromState || tokenFromState !== tokenFromStorage) {
        console.log("Invalid token, redirecting to home");
        navigate("/");
      } else {
        setTimeout(() => {
          localStorage.removeItem("formToken");
          console.log("Removed formToken key from localStorage");
        }, 2000);
      }
    };

    setTimeout(checkFormToken, 10000);

    const tokenFromStorage = localStorage.getItem("formToken");
    const tokenFromState = location.state?.token;

    if (!tokenFromState || tokenFromState !== tokenFromStorage) {
      console.log("Invalid token, redirecting to home");
      navigate("/");
    } else {
      console.log("Tracking event for form submission");
      window.ym(98930630, "reachGoal", "Form Submission", { tokenFromState });
    }
  }, [location, navigate]);

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
        playsInline // Добавляем атрибут playsInline
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

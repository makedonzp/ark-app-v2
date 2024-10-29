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
      const isFormSubmitted = localStorage.getItem("formSubmitted");

      if (!isFormSubmitted) {
        console.log("Form not submitted, redirecting to home");
        navigate("/");
      } else {
        setTimeout(() => {
          localStorage.removeItem("formSubmitted");
          console.log("Removed formSubmitted key from localStorage");
        }, 3000);
      }
    };

    setTimeout(checkFormSubmitted, 10000);

    const isFormSubmitted = localStorage.getItem("formSubmitted");
    if (!isFormSubmitted) {
      console.log("Form not submitted, redirecting to home");
      navigate("/");
    } else {
      console.log("Tracking event for form submission");
      window.ym(98761584, "reachGoal", "Form Submission", { isFormSubmitted });
    }
  }, [navigate]);

  const handleButtonClick = () => {
    window.ym(98761584, "reachGoal", "reachGoal");
  };

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
            <Link
              to="/"
              className={styles.main__link}
              tabIndex={0}
              onClick={handleButtonClick}
            >
              Вернуться на главную
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

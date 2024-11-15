import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import form_img from "../../../assets/photorealistic-house-with-wooden-architecture-timber-structure.webp";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import tg_icon from "../../../assets/telegram_icon.webp";
import whats_icon from "../../../assets/whatsapp_icon.webp";
import call_icon from "../../../assets/footer_call_icon.webp";

export default function Form({ formRef, sectionPath }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    middleName: "",
    consent: false,
    honeypot: "",
    sectionPath: sectionPath || "",
    submissionDate: "",
    referrer: "",
  });

  const [placeholders, setPlaceholders] = useState({
    name: "Ваше имя, фамилия",
    email: "Адрес эл. почты",
    phone: "+7 (999)-999-99-99",
    middleName: "Отчество",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    middleName: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let updatedValue = type === "checkbox" ? checked : value;

    if (name === "phone") {
      if (!/^\+7/.test(updatedValue) && updatedValue.length > 0) {
        updatedValue = `+7${updatedValue}`;
      }
    }

    setFormData({
      ...formData,
      [name]: updatedValue,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+7\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Zа-яА-Я\s-]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    const allowedDomains = [
      "mail.ru",
      "gmail.com",
      "rambler.ru",
      "mailbox.org",
      "mail.com",
      "icloud.com",
      "yandex.ru",
      "yandex.ua",
      "yandex.by",
      "yandex.kz",
      "yandex.com",
      "bk.ru",
      "inbox.ru",
      "list.ru",
      "outlook.com",
      "hotmail.com",
      "yahoo.com",
      "protonmail.com",
      "gmx.com",
      "zoho.com",
      "aol.com",
      "mail.ua",
      "i.ua",
      "meta.ua",
      "ukr.net",
      "mail.by",
      "tut.by",
      "inbox.by",
      "yandex.by",
    ];

    const domain = email.split("@")[1];
    return allowedDomains.includes(domain);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (formData.honeypot) {
      return;
    }

    if (!formData.name) {
      setPlaceholders({
        ...placeholders,
        name: "Пожалуйста, заполните обязательное поле: Имя",
      });
      setErrors({
        ...errors,
        name: "Пожалуйста, заполните обязательное поле: Имя",
      });
      isValid = false;
    } else if (!validateName(formData.name)) {
      setErrors({ ...errors, name: "Неверный формат имени" });
      isValid = false;
    }

    if (!formData.email) {
      setPlaceholders({
        ...placeholders,
        email: "Пожалуйста, заполните обязательное поле: Email",
      });
      setErrors({
        ...errors,
        email: "Пожалуйста, заполните обязательное поле: Email",
      });
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      setErrors({
        ...errors,
        email: "Неверный формат email или не поддерживаемый почтовый сервис",
      });
      isValid = false;
    }

    if (!formData.phone) {
      setPlaceholders({
        ...placeholders,
        phone: "Пожалуйста, заполните обязательное поле: Телефон",
      });
      setErrors({
        ...errors,
        phone: "Пожалуйста, заполните обязательное поле: Телефон",
      });
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      setErrors({ ...errors, phone: "Неверный формат номера телефона" });
      isValid = false;
    }

    if (formData.middleName) {
      setErrors({
        ...errors,
        middleName: "Поле Отчество не должно быть заполнено",
      });
      isValid = false;
    }

    if (!formData.consent) {
      alert(
        "Пожалуйста, подтвердите согласие на обработку персональных данных"
      );
      isValid = false;
    }

    if (isValid) {
      const submissionDate = new Date().toISOString();
      const referrer = window.location.href;

      const updatedFormData = {
        ...formData,
        submissionDate,
        referrer,
      };

      try {
        const response = await fetch("https://dom-ark.com/api/submit-form/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        });

        if (response.ok) {
          const token =
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
          localStorage.setItem("formToken", token);
          navigate("/we-will-connect", { state: { token } });

          window.ym(98930630, "reachGoal", "Form Submission", { formData });
        } else {
          const errorData = await response.json();
          alert("Ошибка при отправке формы: " + errorData.message);
        }
      } catch (error) {
        alert("Ошибка при отправке формы");
      }
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.removeItem("formToken");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <Container fluid className={styles.form_fluid}>
      <Container>
        <Row className={styles.row_form}>
          <Col className={styles.form_img_box + " " + styles.orderFormFirst}>
            <div
              style={{ backgroundImage: `url(${form_img})` }}
              alt="form_icon"
              className={styles.form_img}
            ></div>
          </Col>
          <Col
            id="form"
            ref={formRef}
            className={styles.form + " " + styles.orderFormSecond}
          >
            <div className={styles.form__title_wrapper}>
              <h2 className={styles.form__title}>Заказать звонок</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.form__input_wrapper}>
                <div className={styles.form__wrapper}>
                  <input
                    className={styles.form_input}
                    type="text"
                    name="name"
                    placeholder={placeholders.name}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <span className={styles.form__span}>
                    * Это поле обязательное для заполнения
                  </span>
                  {errors.name && (
                    <span className={styles.form__span_error}>
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className={styles.form__wrapper}>
                  <input
                    className={styles.form_input}
                    type="text"
                    name="email"
                    placeholder={placeholders.email}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <span className={styles.form__span}>
                    * Это поле обязательное для заполнения
                  </span>
                  {errors.email && (
                    <span className={styles.form__span_error}>
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className={styles.form__wrapper}>
                  <input
                    className={styles.form_input}
                    type="text"
                    name="phone"
                    placeholder={placeholders.phone}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <span className={styles.form__span}>
                    * Это поле обязательное для заполнения
                  </span>
                  {errors.phone && (
                    <span className={styles.form__span_error}>
                      {errors.phone}
                    </span>
                  )}
                </div>
                <div
                  className={styles.form__wrapper + " " + styles.form__honeypot}
                >
                  <input
                    className={styles.form_input}
                    type="text"
                    name="middleName"
                    placeholder={placeholders.middleName}
                    value={formData.middleName}
                    onChange={handleChange}
                  />
                  <span className={styles.form__span}>
                    * Это поле обязательное для заполнения
                  </span>
                  {errors.middleName && (
                    <span className={styles.form__span_error}>
                      {errors.middleName}
                    </span>
                  )}
                </div>
                <div className={styles.form__btn_wrapper}>
                  <button type="submit" className={styles.form__btn}>
                    <span className={styles.form__btn_text}>
                      Связаться с нами
                    </span>
                  </button>
                </div>
                <div className={styles.form__confiditial}>
                  <input
                    className={styles.form__confiditial_btn}
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                  />
                  <p className={styles.form__confiditial_text}>
                    Подтверждаю согласие на обработку персональных данных и
                    соглашаюсь с политикой конфиденциальности
                  </p>
                </div>
                <input
                  className={styles.form__honeypot}
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
              </div>
            </form>
          </Col>
          <Col md={12} sm={12}>
            <ul className={styles.socials__list}>
              <li className={styles.socisals__item}>
                <Link
                  to="https://t.me/ARK_Agency"
                  className={styles.socials__link}
                >
                  <img src={tg_icon} alt="Telegram" />
                </Link>
              </li>
              <li className={styles.socisals__item}>
                <Link
                  to="https://wa.me/+79786920164"
                  className={styles.socials__link}
                >
                  <img src={whats_icon} alt="WhatsApp" />
                </Link>
              </li>
              <li className={styles.socisals__item}>
                <Link
                  to="tel:+7 (978) 113-23-25"
                  className={styles.socials__link}
                >
                  <img src={call_icon} alt="Call" />
                </Link>
              </li>
              <li className={styles.socisals__item}>
                <p className={styles.socials__text}>
                  Ваш приоритетный способ связи
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

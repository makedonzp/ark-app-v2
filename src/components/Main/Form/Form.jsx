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
    honeypot: "", // Скрытое поле honeypot
    sectionPath: sectionPath || "", // Добавляем путь раздела
    submissionDate: "", // Добавляем поле для даты заполнения заявки
    referrer: "", // Добавляем поле для отслеживания с какой страницы была отправлена форма
    ip: "", // Добавляем поле для IP-адреса
    region: "", // Добавляем поле для региона
    message: "", // Текстовое сообщение от клиента
    url: "", // Адрес страницы, с которой была отправлена заявка
    source: "", // ID рекламного источника
    employee: "", // ID сотрудника в CRM
    department: "", // ID отдела в CRM
    external_id: "", // ID заявки в вашей внутренней системе
    object_code: "", // Код объекта
    object_name: "", // Название объекта
    object_price: "", // Цена объекта
    visitor: {
      utm_campaign: "",
      utm_source: "",
      utm_medium: "",
      gclid: "",
      ym_client_id: "",
      yclid: "",
    },
  });

  const [placeholders, setPlaceholders] = useState({
    name: "Ваше имя, фамилия",
    email: "Адрес эл. почты",
    phone: "+7 (999)-999-99-99",
    middleName: "Отчество",
    message: "Текстовое сообщение от клиента",
    url: "Адрес страницы, с которой была отправлена заявка",
    source: "ID рекламного источника",
    employee: "ID сотрудника в CRM",
    department: "ID отдела в CRM",
    external_id: "ID заявки в вашей внутренней системе",
    object_code: "Код объекта",
    object_name: "Название объекта",
    object_price: "Цена объекта",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    middleName: "",
    message: "",
    url: "",
    source: "",
    employee: "",
    department: "",
    external_id: "",
    object_code: "",
    object_name: "",
    object_price: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let updatedValue = type === "checkbox" ? checked : value;

    if (name === "phone") {
      // Проверка и форматирование номера телефона
      if (!/^\+7/.test(updatedValue) && updatedValue.length > 0) {
        updatedValue = `+7${updatedValue}`;
      }
    }

    setFormData({
      ...formData,
      [name]: updatedValue,
    });

    // Очистка ошибок при изменении поля
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

  const generateExternalId = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    const randomNumber = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0");
    return randomLetter + randomNumber;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (formData.honeypot) {
      // Если honeypot поле заполнено, считаем, что форма отправлена роботом
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
      // Устанавливаем текущую дату и время перед отправкой формы
      const submissionDate = new Date().toISOString();
      const referrer = window.location.href; // Получаем текущий URL
      const external_id = generateExternalId(); // Генерируем уникальный external_id

      const updatedFormData = {
        ...formData,
        submissionDate,
        referrer,
        external_id,
      };

      try {
        // Отправка данных в админку
        const adminResponse = await fetch(
          "https://dom-ark.com/api/submit-form/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedFormData),
          }
        );

        if (adminResponse.ok) {
          localStorage.setItem("formSubmitted", "true");
          navigate("/we-will-connect");
        } else {
          const errorData = await adminResponse.json();
          console.error("Server error:", errorData);
          alert("Ошибка при отправке формы: " + errorData.message);
        }

        // Отправка данных в CRM для каждого ID сотрудника
        const employeeIds = [4, 5, 6, 98, 66];
        for (const employeeId of employeeIds) {
          const crmFormData = {
            oauth_token: "db261d739af48b5089afa551226ec0b7", // API-ключ для просмотра и изменения данных
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            description: `Страница: ${referrer}, Локация: ${formData.region}`,
            employee: employeeId,
          };

          const crmResponse = await fetch(
            "https://ark.yucrm.ru/api/submit-form/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(crmFormData),
            }
          );

          if (!crmResponse.ok) {
            const crmErrorData = await crmResponse.json();
            console.error("CRM Server error:", crmErrorData);
            alert("Ошибка при отправке формы в CRM: " + crmErrorData.message);
          }
        }
      } catch (error) {
        console.error("Ошибка при отправке формы:", error);
        alert("Ошибка при отправке формы");
      }
    }
  };

  useEffect(() => {
    // Получаем IP-адрес пользователя
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        const ip = data.ip;
        setFormData((prevFormData) => ({
          ...prevFormData,
          ip,
        }));

        // Получаем информацию о местоположении по IP-адресу
        fetch(`https://ipinfo.io/${ip}/json?token=YOUR_IPINFO_TOKEN`)
          .then((response) => response.json())
          .then((locationData) => {
            const region = locationData.city;
            setFormData((prevFormData) => ({
              ...prevFormData,
              region,
            }));
          })
          .catch((error) => {
            console.error(
              "Ошибка при получении информации о местоположении:",
              error
            );
          });
      })
      .catch((error) => {
        console.error("Ошибка при получении IP-адреса:", error);
      });
  }, []);

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
                <div className={styles.form__wrapper}>
                  <input
                    className={styles.form_input}
                    type="text"
                    name="message"
                    placeholder={placeholders.message}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <span className={styles.form__span}>
                    * Это поле обязательное для заполнения
                  </span>
                  {errors.message && (
                    <span className={styles.form__span_error}>
                      {errors.message}
                    </span>
                  )}
                </div>
                <div className={styles.form__wrapper}>
                  <input
                    className={styles.form_input}
                    type="text"
                    name="url"
                    placeholder={placeholders.url}
                    value={formData.url}
                    onChange={handleChange}
                  />
                  <span className={styles.form__span}>
                    * Это поле обязательное для заполнения
                  </span>
                  {errors.url && (
                    <span className={styles.form__span_error}>
                      {errors.url}
                    </span>
                  )}
                </div>
                <div className={styles.form__wrapper}>
                  <input
                    className={styles.form_input}
                    type="text"
                    name="source"
                    placeholder={placeholders.source}
                    value={formData.source}
                    onChange={handleChange}
                  />
                  <span className={styles.form__span}>
                    * Это поле обязательное для заполнения
                  </span>
                  {errors.source && (
                    <span className={styles.form__span_error}>
                      {errors.source}
                    </span>
                  )}
                </div>
                <div className={styles.form__wrapper}>
                  <input
                    className={styles.form_input}
                    type="text"
                    name="employee"
                    placeholder={placeholders.employee}
                    value={formData.employee}
                    onChange={handleChange}
                  />
                  <span className={styles.form__span}>
                    * Это поле обязательное для заполнения
                  </span>
                  {errors.employee && (
                    <span className={styles.form__span_error}>
                      {errors.employee}
                    </span>
                  )}
                </div>
                <div className={styles.form__wrapper}>
                  <input
                    className={styles.form_input}
                    type="text"
                    name="department"
                    placeholder={placeholders.department}
                    value={formData.department}
                    onChange={handleChange}
                  />
                  <span className={styles.form__span}>
                    * Это поле обязательное для заполнения
                  </span>
                  {errors.department && (
                    <span className={styles.form__span_error}>
                      {errors.department}
                    </span>
                  )}
                </div>
                <div className={styles.form__wrapper}>
                  <input
                    className={styles.form_input}
                    type="text"
                    name="external_id"
                    placeholder={placeholders.external_id}
                    value={formData.external_id}
                    onChange={handleChange}
                  />
                  <span className={styles.form__span}>
                    * Это поле обязательное для заполнения
                  </span>
                  {errors.external_id && (
                    <span className={styles.form__span_error}>
                      {errors.external_id}
                    </span>
                  )}
                </div>
                <div className={styles.form__wrapper}>
                  <input
                    className={styles.form_input}
                    type="text"
                    name="object_code"
                    placeholder={placeholders.object_code}
                    value={formData.object_code}
                    onChange={handleChange}
                  />
                  <span className={styles.form__span}>
                    * Это поле обязательное для заполнения
                  </span>
                  {errors.object_code && (
                    <span className={styles.form__span_error}>
                      {errors.object_code}
                    </span>
                  )}
                </div>
                <div className={styles.form__wrapper}>
                  <input
                    className={styles.form_input}
                    type="text"
                    name="object_name"
                    placeholder={placeholders.object_name}
                    value={formData.object_name}
                    onChange={handleChange}
                  />
                  <span className={styles.form__span}>
                    * Это поле обязательное для заполнения
                  </span>
                  {errors.object_name && (
                    <span className={styles.form__span_error}>
                      {errors.object_name}
                    </span>
                  )}
                </div>
                <div className={styles.form__wrapper}>
                  <input
                    className={styles.form_input}
                    type="text"
                    name="object_price"
                    placeholder={placeholders.object_price}
                    value={formData.object_price}
                    onChange={handleChange}
                  />
                  <span className={styles.form__span}>
                    * Это поле обязательное для заполнения
                  </span>
                  {errors.object_price && (
                    <span className={styles.form__span_error}>
                      {errors.object_price}
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

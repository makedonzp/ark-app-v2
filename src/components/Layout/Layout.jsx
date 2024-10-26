import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import New from "../New/New";
import Lands from "../Lands/Lands";
import District from "../District/District";
import Land from "../Land/Land";
import Services from "../Services/Services";
import Confeditial from "../Confeditial/Confeditial";
import City from "../City/City";
import Complex from "../Complex/Complex";
import ApartmentDetails from "../Complex/ApartmentDetails/ApartmentDetails";
import Contacts from "../Contacts/Contacts";
import About from "../About/About";
import LandDetails from "../District/LandDetails/LandDetails";
import HotForm from "../HotForm/HotForm";
import ValueFormRequest from "../ValueFormRequest/ValueFormRequest";
import { DataContext } from "../DataContext/DataContext";
import { trackPageView } from "../metrika/metrics"; // Импортируйте функцию отправки метрики
import ScrollToTop from "../ScrollToTop/ScrollToTop"; // Импортируйте компонент ScrollToTop

export default function Layout() {
  const data = useContext(DataContext);
  const location = useLocation(); // Получаем текущий путь
  const navigate = useNavigate(); // Получаем функцию для навигации
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    // Отправляем данные о просмотре страницы при каждом изменении маршрута
    trackPageView(location.pathname, document.title);
  }, [location]);

  useEffect(() => {
    // Проверка наличия флага в localStorage
    const formSubmitted = localStorage.getItem("formSubmitted");
    if (formSubmitted === "true") {
      setIsFormSubmitted(true);
    } else if (location.pathname === "/we-will-connect") {
      // Если флаг отсутствует и пользователь находится на странице /we-will-connect, перенаправляем на главную
      navigate("/");
    }

    // Удаление флага при возвращении на главную страницу
    if (location.pathname === "/") {
      localStorage.removeItem("formSubmitted");
    }
  }, [location, navigate]);

  return (
    <div
      className={styles.layout}
      role="application"
      aria-label="Основное приложение"
      tabIndex={0}
    >
      <ScrollToTop /> {/* Добавьте компонент ScrollToTop здесь */}
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/new" exact element={<New data={data.new} />} />
        <Route path="/plots" element={<Lands data={data.plots} />} />
        <Route
          path="/plots/:citySlug"
          element={<District data={data.plots} />}
        />
        <Route
          path="/plots/:citySlug/:districtSlug"
          element={<Land data={data.plots} />}
        />
        <Route
          path="/plots/:citySlug/:districtSlug/:landSlug"
          element={<LandDetails data={data.plots} />}
        />
        <Route path="/services" element={<Services />} />
        <Route path="/confeditial" element={<Confeditial />} />
        <Route path="/new/:citySlug" element={<City data={data.new} />} />
        <Route
          path="/new/:citySlug/:complexSlug"
          element={<Complex data={data.new} type="complexes" />}
        />
        <Route
          path="/new/:citySlug/:complexSlug/:apartmentSlug"
          element={<ApartmentDetails data={data.new} />}
        />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/hot-form" element={<HotForm />} />
        <Route
          path="/we-will-connect"
          element={isFormSubmitted ? <ValueFormRequest /> : <Main />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
import ScrollToTop from "../ScrollToTop/ScrollToTop";

export default function Layout() {
  const data = useContext(DataContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isMetrikaReady, setIsMetrikaReady] = useState(false);

  useEffect(() => {
    const formToken = localStorage.getItem("formToken");
    console.log("Проверка статуса отправки формы в Layout:", formToken);

    if (formToken) {
      setIsFormSubmitted(true);
    } else if (location.pathname === "/we-will-connect") {
      console.log("Форма не отправлена, перенаправление на главную");
      navigate("/");
    }

    if (location.pathname === "/") {
      localStorage.removeItem("formToken");
    }
  }, [location, navigate]);

  useEffect(() => {
    // Проверка готовности Яндекс.Метрики
    const checkMetrikaReady = setInterval(() => {
      if (window.ym && window.ym.apply) {
        console.log("Яндекс.Метрика готова");
        setIsMetrikaReady(true);
        clearInterval(checkMetrikaReady);
      }
    }, 100);

    return () => clearInterval(checkMetrikaReady);
  }, []);

  useEffect(() => {
    if (isMetrikaReady) {
      console.log(
        "Отправка события просмотра страницы для:",
        location.pathname
      );
      window.ym(98948525, "hit", location.pathname, {
        title: document.title,
        referer: document.referrer,
        params: {
          param1: "value1",
          param2: "value2",
        },
      });
    } else {
      console.log(
        "Яндекс.Метрика не готова, не отправляем событие просмотра страницы для:",
        location.pathname
      );
    }
  }, [location, isMetrikaReady]);

  return (
    <div
      className={styles.layout}
      role="application"
      aria-label="Основное приложение"
      tabIndex={0}
    >
      <ScrollToTop />
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

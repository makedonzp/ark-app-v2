import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
import ScrollToTop from "../ScrollToTop/ScrollToTop";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Отправка события просмотра страницы в Яндекс.Метрику
    window.ym(98761584, "hit", location.pathname, {
      title: document.title,
      referer: document.referrer,
      params: {
        param1: "value1",
        param2: "value2",
      },
    });
  }, [location]);

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
        <Route path="/new" exact element={<New />} />
        <Route path="/plots" element={<Lands />} />
        <Route path="/plots/:citySlug" element={<District />} />
        <Route path="/plots/:citySlug/:districtSlug" element={<Land />} />
        <Route
          path="/plots/:citySlug/:districtSlug/:landSlug"
          element={<LandDetails />}
        />
        <Route path="/services" element={<Services />} />
        <Route path="/confeditial" element={<Confeditial />} />
        <Route path="/new/:citySlug" element={<City />} />
        <Route path="/new/:citySlug/:complexSlug" element={<Complex />} />
        <Route
          path="/new/:citySlug/:complexSlug/:apartmentSlug"
          element={<ApartmentDetails />}
        />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/hot-form" element={<HotForm />} />
        <Route path="/we-will-connect" element={<ValueFormRequest />} />
      </Routes>
      <Footer />
    </div>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { trackPageView } from "../metrika/tracking"; // Исправлен путь
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

  useEffect(() => {
    const formSubmitted = localStorage.getItem("formSubmitted");
    console.log("Checking form submission status in Layout:", formSubmitted);

    if (formSubmitted === "true") {
      setIsFormSubmitted(true);
    } else if (location.pathname === "/we-will-connect") {
      console.log("Form not submitted, redirecting to home");
      navigate("/");
    }

    if (location.pathname === "/") {
      localStorage.removeItem("formSubmitted");
    }

    // Отслеживание просмотра страницы для всех путей
    console.log("Tracking page view for:", location.pathname);
    trackPageView(location.pathname, document.title);

    if (location.pathname === "/we-will-connect" && formSubmitted === "true") {
      console.log("Tracking page view for:", location.pathname);
      trackPageView(location.pathname, document.title);
    } else {
      console.log("Not tracking page view for:", location.pathname);
    }
  }, [location, navigate]);

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

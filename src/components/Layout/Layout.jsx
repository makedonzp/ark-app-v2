import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import New from "../New/New";
import Lands from "../Lands/Lands";
import District from "../District/District"; // Добавьте импорт
import Land from "../Land/Land"; // Добавьте импорт
import Services from "../Services/Services";
import Confeditial from "../Confeditial/Confeditial";
import City from "../City/City";
import Complex from "../Complex/Complex";
import ApartmentDetails from "../Complex/ApartmentDetails/ApartmentDetails";
import axios from "axios";
import Contacts from "../Contacts/Contacts";
import About from "../About/About";
import LandDetails from "../District/LandDetails/LandDetails";
import HotForm from "../HotForm/HotForm";

const fetchData = () => {
  return axios
    .get("http://arkcrimea.ru/api/full-data/")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};

export default function Layout() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || {}
  );

  useEffect(() => {
    fetchData().then((newData) => {
      if (newData) {
        localStorage.setItem("data", JSON.stringify(newData));
        setData(newData);
      }
    });
  }, []);
  console.log(data);

  return (
    <div className={styles.layout}>
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
      </Routes>
      <Footer />
    </div>
  );
}

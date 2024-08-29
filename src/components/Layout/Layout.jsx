import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import New from "../New/New";
import Lands from "../Lands/Lands";
import Services from "../Services/Services";
import Confeditial from "../Confeditial/Confeditial";
import City from "../City/City";
import Complex from "../Complex/Complex"; // Предполагаем, что у вас есть такой компонент
import axios from "axios";
import Contacts from "../Contacts/Contacts";

const Data = () => {
  axios
    .get("https://arc-backend-steel.vercel.app/api/full-data/")
    .then((response) => {
      localStorage.setItem("data", JSON.stringify(response.data));
    })
    .catch((error) => {
      console.error(error);
    });
};
Data();

export default function Layout() {
  const data = JSON.parse(localStorage.getItem("data")) || [];

  return (
    <div className={styles.layout}>
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/new" exact element={<New data={data} />} />
        <Route path="/lands" element={<Lands data={data} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/confeditial" element={<Confeditial />} />
        <Route path="/:citySlug" element={<City data={data} />} />
        <Route
          path="/:citySlug/:complexSlug"
          element={<Complex data={data} />}
        />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

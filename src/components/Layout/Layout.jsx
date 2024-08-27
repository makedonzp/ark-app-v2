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

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/new" exact element={<New />} />
        <Route path="/lands" element={<Lands />} />
        <Route path="/services" element={<Services />} />
        <Route path="/confeditial" element={<Confeditial />} />
        <Route path="/:citySlug" element={<City />} />
        <Route path="/:citySlug/:complexSlug" element={<Complex />} />
      </Routes>
      <Footer />
    </div>
  );
}

import React from "react";
import styles from "./Logo.module.css";
import logo_icon from "../../../assets/ark_logo.webp";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      itemScope
      itemType="http://schema.org/Organization"
      aria-label="Перейти на главную страницу"
      tabIndex={0}
    >
      <img
        className={styles.logo}
        src={logo_icon}
        alt="Логотип Агентства Риэлтерского Консалтинга АРК недвижимость"
        itemProp="logo"
      />
    </Link>
  );
}

import React from "react";
import styles from "./Contants.module.css";
import { Link } from "react-router-dom";
import contants__icon from "../../../assets/call_icon.webp";

export default function Contants() {
  return (
    <Link
      to="tel:+79786920164"
      className={styles.contants__link}
      role="link"
      aria-label="Позвонить по номеру +7 (978) 692–01–64"
      tabIndex={0}
    >
      <img src={contants__icon} alt="Иконка звонка" />
      +7 (978) 692–01–64
    </Link>
  );
}

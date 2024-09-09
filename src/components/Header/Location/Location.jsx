import React from "react";
import styles from "./Location.module.css";
import location_img from "../../../assets/location_icon.png";

export default function Location() {
  return (
    <div
      className={styles.location}
      itemScope
      itemType="http://schema.org/Place"
    >
      <img
        className={styles.location_img}
        src={location_img}
        alt="Иконка города"
      />
      <select
        className={styles.select}
        aria-label="Выбор города"
        itemScope
        itemType="http://schema.org/Language"
      >
        <option className={styles.option} value="ru" itemProp="name">
          Симферополь
        </option>
        <option className={styles.option} value="ru" itemProp="name">
          Ялта
        </option>
        <option className={styles.option} value="en" itemProp="name">
          Феодосия
        </option>
        <option className={styles.option} value="en" itemProp="name">
          Алушта
        </option>
      </select>
    </div>
  );
}

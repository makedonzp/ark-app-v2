import { useEffect } from "react";
import { initYandexMetrika } from "../metrika/tracking"; // Исправлен путь

const YandexMetrikaLoader = () => {
  useEffect(() => {
    // console.log("Loading Yandex.Metrika script...");
    const script = document.createElement("script");
    script.src = "https://mc.yandex.ru/metrika/tag.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // console.log("Yandex.Metrika script loaded.");

      // Добавляем небольшую задержку перед инициализацией
      setTimeout(() => {
        // console.log("Checking if Yandex.Metrika is ready...");
        if (
          typeof window.Ya !== "undefined" &&
          typeof window.Ya.Metrika2 === "function"
        ) {
          // console.log("Yandex.Metrika is ready.");
          initYandexMetrika(98750284);
        } else {
          console.warn("Yandex.Metrika is not loaded after script load.");
        }
      }, 1000); // Задержка в 1 секунду
    };

    script.onerror = (error) => {
      console.error("Error loading Yandex.Metrika script:", error);
    };

    return () => {
      // console.log("Removing Yandex.Metrika script...");
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default YandexMetrikaLoader;

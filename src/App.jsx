import React from "react";
import Layout from "./components/Layout/Layout";
import { DataProvider } from "./components/DataContext/DataContext";
import YandexMetrikaLoader from "./components/YandexMetrikaLoader/YandexMetrikaLoader";

export default function App() {
  return (
    <div role="application" aria-label="Основное приложение" tabIndex={0}>
      <DataProvider>
        <Layout />
        <YandexMetrikaLoader />
      </DataProvider>
    </div>
  );
}

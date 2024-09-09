import React from "react";
import Layout from "./components/Layout/Layout";
import { DataProvider } from "./components/DataContext/DataContext";

export default function App() {
  return (
    <div role="application" aria-label="Основное приложение" tabIndex={0}>
      <DataProvider>
        <Layout />
      </DataProvider>
    </div>
  );
}

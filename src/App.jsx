import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

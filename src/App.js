import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LocationPage from "./components/LocationPage";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:consumerId" element={<LocationPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LocationPage from "./components/LocationPage";
import MainContent from "./components/MainContent";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:9000/")
      .then((res) => res.json())
      .then(({ locations }) => {
        setData(locations);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainContent data={data} />} />
        <Route
          path="/location/:consumerId"
          element={<LocationPage data={data} setData={setData} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LocationPage from "./components/LocationPage";
import MainContent from "./components/MainContent";
import { StyledApp } from "./styles/App.style";
import { ThemeProvider } from "styled-components";
import { Global } from "./styles/Global";

const theme = {
  colors: {
    mainBg: "#eee",
    mainAccent: "rgb(255, 166, 0)",
    mainText: "#333",
    mainCard: "#fff",
  },
};

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
    <ThemeProvider theme={theme}>
      <Global />
      <StyledApp>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent data={data} />} />
          <Route
            path="/location/:consumerId"
            element={<LocationPage data={data} setData={setData} />}
          />
        </Routes>
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

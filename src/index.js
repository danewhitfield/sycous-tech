import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";

const theme = {
  colors: {
    mainBg: "#eee",
    mainAccent: "rgb(255, 166, 0)",
    mainText: "#333",
    mainCard: "#fff",
    sycousAccent: "#2C3D4F",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import ScrollToTop from "./ScrollToTop";
import DashboardHome from "./DashboardHome";
import Containers from "./Containers";

const theme = {
  colors: {
    heading: "#1E2640",
    text: "rgba(29 ,29, 29, .8)",
    black: " #212529",
    main: "#FAFAFA",
    // main:"#1C3B00",
    helper: "#FAFAFA",
    red: "red",
    white: "#fff",
    bg: "#FAFAFA",
    btn: "#146EB4",
    // btn:"#1C3B00",
    new: "#C0C0C0",
    border: "#C0C0C0",
    hr: "#ffffff",
    gradient:
      "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  media: {
    mobile: "768px",
    tab: "998px",
  },
};

export default function App() {
  const handleRoutes = () => {
    return (
      <>
        <Route path="/" element={<Containers />} />
        <Route path="/admin/:id" element={<DashboardHome />} />
      </>
    );
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <ScrollToTop />
          <Routes>{handleRoutes()}</Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

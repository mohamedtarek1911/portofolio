import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Qalifications from "./Components/Qalifications/Qalifications";
import Work from "./Components/Works/Work";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Scrollup from "./Components/ScrollUp/Scrollup";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Qalifications />
      <Work />
      <Contact />
      <Footer />
      <Scrollup />
    </>
  );
}

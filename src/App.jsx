import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.min.css';
import '../public/assets/css/style.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';


import Header from "./components/headers/Header";
import Home from "./pages/Home";
import NoPage from "./components/NoPage";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

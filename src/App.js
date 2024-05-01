import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Architectural from "./pages/Architectural";
import Interior from "./pages/Interior";
import Model from "./pages/Model";
import Cusotmer from "./pages/Cusotmer";

//componetns
import Navigation from "./components/Navigation";
import SliderArea from "./components/SliderArea";
import Footer from "./components/Footer";
import ContentSpace from "./components/ContentSpace";

const App = () => {
  return (
    <div>
      <Navigation />
      {/* <SliderArea /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/architectural" element={<Architectural />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/model" element={<Model />} />
        <Route path="/cusotmer" element={<Cusotmer />} />
      </Routes>
      {/*  <ContentSpace /> */}
      <Footer />

      {/*  <div className="scroll-up">
        <ul>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default App;

/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./routes/Contact";

import Home from "./routes/Home";
import Pricing from "./routes/Pricing";
import Training from "./routes/Training";
import Begineer from "./routes/Begineer";
import Intermediate from "./routes/Intermediate";
import Advanced from "./routes/Advanced";

function App() {
  return (
    <>
      <Routes>
        <Route path="/NasaAppFrontend" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/begineer" element={<Begineer />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/advanced" element={<Advanced />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

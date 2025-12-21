import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "./components/pages/Loading";
import Landing from "./components/pages/Landing";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Loading screen */}
        <Route path="/" element={<Loading />} />

        {/* Single-page portfolio */}
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

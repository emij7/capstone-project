import "./categories.styles.scss";
import { Home } from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { Navigation } from "./routes/navigation/navigation.component";
import { Authentication } from "./components/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Navigation />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;

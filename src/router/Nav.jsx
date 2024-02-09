import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetails from "../components/CardDetails/CardDetails";
import HomePage from "../page/HomePage";

function Nav() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/users-details/:id" element={<CardDetails />} />
    </Routes>
  );
}

export default Nav;

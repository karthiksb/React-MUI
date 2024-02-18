import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard/*" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

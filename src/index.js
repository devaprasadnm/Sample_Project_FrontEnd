import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import FormComponent from './components/Form';

function Url() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/login" element={<FormComponent/>} />
          </Routes>
    </Router>

  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Url />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

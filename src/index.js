import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import App from "./App";
import AboutUs from "./components/AboutUs";
import Books from "./components/Books";
import Book from "./components/Book";
import NotFound from "./components/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<main style={{padding: "1rem"}}><p>بخش مورد نظر را انتخاب کنید</p></main>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/books" element={<Books />}>
            <Route index element={<main style={{padding: "1rem"}}><p>کتاب مورد نظر خود را انتخاب کنید</p></main>} />
            <Route path=":bookId" element={<Book />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound   />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

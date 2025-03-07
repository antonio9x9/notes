import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";

import MainPage from './pages/mainPage/MainPage';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter >
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </BrowserRouter >
);


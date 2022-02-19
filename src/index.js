import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);

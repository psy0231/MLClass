import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes, NavLink } from 'react-router-dom';
import styled from "styled-components";

import Country from './pages/Country';

const NavStyle = styled(NavLink)`
  color: darkgray;
  padding: 5px;
  font-size: 16px;
  font-weight: 400;
  margin: 5px;
  &:link {
    transition : 0.5s;
    text-decoration: none;
  }
  &:hover {
    color: darkgray;
    text-decoration: none;
  }
  &.active {
    background-color: chocolate;
    color: white;
    position: relative;
    top: 2px;
    text-decoration: none;
  }
`

function App() {
  return (
    <div>
      <div style={{textAlign: "center", fontSize: "22px"}}>AI 웹 서비스 시스템</div>
      <h5 style={{textAlign: "center"}}>Tensorflow 2 model + Python + Django + Ajax + JSon + React + jQuery + Bootatrap</h5>
      <div style={{textAlign: "center"}}>
        <NavStyle to="/country">귀농귀촌 적응 예측(이항분류)</NavStyle>
      </div>
      <Routes>
        <Route path="/country" element={<Country />} />
        <Route path='/*' element={''} />
      </Routes>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HashRouter><App /></HashRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


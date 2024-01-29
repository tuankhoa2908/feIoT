import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './page/Login';
import MainLayout from './components/MainLayout';
import DashBoard from './page/DashBoard';
import Record from './page/Record';
import Device from './page/Device';
import Account from './page/Account';
import RecordDetail from './page/RecordDetail';
import ForgotPass from './page/ForgotPassword';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="forgot-pass" element={<ForgotPass />} />
          <Route path='/admin' element={<MainLayout />}>
            <Route index element={<DashBoard />} />
            <Route path='record' element={<Record />} />
            <Route path='device' element={<Device />} />
            <Route path='account' element={<Account />} />
            <Route path='record-detail/:id' element={<RecordDetail />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

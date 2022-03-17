import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './RequireAuth';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Exit from '../pages/Exit';
import Page404 from '../components/Page404';
import Unauthorized from '../components/Unauthorized';

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

export default function RoutesPages() {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<h1>Página de início</h1>} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Unauthorized" element={<Unauthorized />} />

      {/* we want to protect these routes */}
      <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        <Route path="/Exit" element={<Exit />} />
      </Route>

      {/* catch all */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

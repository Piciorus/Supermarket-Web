import React, { Component, useEffect, useState } from "react";
import "./App.css";

import {
  BrowserRouter,
  Navigate,
  redirect,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Register from "./components/pages/Register/Register";
import Testing from "./components/pages/Test";
import Login from "./components/pages/Login/Login";
import Hello from "./components/pages/Hello";
import Client from "./components/pages/Client";
import Unauthorized from "./components/pages/Unauthorized/Unauthorized";
import Test from "./components/pages/Test";
import Products from "./components/pages/Products/Products";
import ProtectedRoutesAdmin from "./utils/ProtectedRoutesAdmin";
import ProtectedRoutesClient from "./utils/ProtectedRoutesClient";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/test"
            element={
              <ProtectedRoutesAdmin component={Test}></ProtectedRoutesAdmin>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoutesAdmin component={Hello}></ProtectedRoutesAdmin>
            }
          />
          <Route path="/testing" element={<Testing />} />
          <Route
            path="/client"
            element={
              <ProtectedRoutesClient component={Client}></ProtectedRoutesClient>
            }
          />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route
            path="/products"
            element={
              <ProtectedRoutesClient
                component={Products}
              ></ProtectedRoutesClient>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { Component, useEffect, useState } from "react";
import "./App.css";
// import Login from "./components/pages";

import {
  BrowserRouter,
  Navigate,
  redirect,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Register from "./components/pages/Register";
import Testing from "./components/pages/Test";
import AdminGuard from "./libs/Guards/AdminGuard";
import { AuthService } from "./libs/Auth/AuthService";
import Login from "./components/pages/Login";
import Hello from "./components/pages/Hello";
import Client from "./components/pages/Client";
import Unauthorized from "./components/pages/Unauthorized";
import Test from "./components/pages/Test";
import ClientGuard from "./libs/Guards/ClientGuard";
import Products from "./components/pages/Products";
// import { Redirect } from "react-router";
// import  Redirect  from "react-router";

interface Props {
  component: React.FC;
}

const AuthorizedRouteAdmin: React.FC<Props> = ({ component: Component }) => {
  const navigate = useNavigate();
  const authService = new AuthService();
  const adminguard = new AdminGuard(authService);

  useEffect(() => {
    if (!adminguard.canActivateAdmin()) {
      navigate("/unauthorized");
    }
  }, [adminguard, navigate]);

  return <Component />;
};

const AuthorizedRouteClient: React.FC<Props> = ({ component: Component }) => {
  const navigate = useNavigate();
  const authService = new AuthService();
  const clientguard = new ClientGuard(authService);

  useEffect(() => {
    if (!clientguard.canActivateClient()) {
      navigate("/unauthorized");
    }
  }, [clientguard, navigate]);

  return <Component />;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/test"
            element={<AuthorizedRouteAdmin component={Test}></AuthorizedRouteAdmin>}
          />
          <Route
            path="/admin"
            element={<AuthorizedRouteAdmin component={Hello}></AuthorizedRouteAdmin>}
          />
          <Route
            path="/testing"
            element={<Testing/>}
          />
          <Route
            path="/client"
            element={<AuthorizedRouteClient component={Client}></AuthorizedRouteClient>}
          />
          <Route
            path="/unauthorized"
            element={<Unauthorized/>}
          />
          <Route
            path="/products"
            element={<AuthorizedRouteAdmin component={Products}></AuthorizedRouteAdmin>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// return (
//   <div className="App">
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/hello" element={<GreetingPage />} />
//         <Route path="/testing" element={<Testing />} />
//       </Routes>
//     </BrowserRouter>
//   </div>
// );

export default App;

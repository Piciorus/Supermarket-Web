import React, { Component, useEffect, useState } from "react";
import "./App.css";
// import Login from "./components/pages";

import { BrowserRouter, redirect, Route, Routes, useNavigate } from "react-router-dom";
import Register from "./components/pages/Register";
import Testing from "./components/pages/Testing";
import AdminGuard  from "./libs/Guards/AdminGuard";
import { AuthService } from "./libs/Auth/AuthService";
import Tesing from "./components/pages/tesing";
import Login from "./components/pages/Login";
import Hello from "./components/pages/Hello";
// import { Redirect } from "react-router";
// import  Redirect  from "react-router";

interface Props {
  component: React.FC;
}

const AuthorizedRoute: React.FC<Props> = ({ component: Component }) => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const authService = new AuthService();
  const adminguard = new AdminGuard(authService);

  if (!user) return null;
  if (!adminguard.canActivate()) navigate("/unauthorized");
  return <Component />;
};

function App() {
  



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
              <Route index element={<Login/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/hello" element={<Hello/>} />
              <Route path="/testing" element={<Testing />} />
              <Route path="/test" element={<Tesing />} />
              {/* <Route path="/testing" element={<Testing />} /> */}
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

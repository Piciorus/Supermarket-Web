import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../libs/Auth/AuthService";
import AdminGuard from "../../libs/Guards/AdminGuard";
import { User } from "../../libs/Model/User";
import "../../index.css";
import { Button, Stack } from "@mui/material";
// import { AuthService } from "./auth/autentificarea/AuthService";
// import AdminGuard from "./auth/Guards/adminguard";
// import { User } from "./auth/Model/User";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const authService = new AuthService();
  const adminguard = new AdminGuard(authService);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    if (username.trim() === "" || password.trim() === "") {
      setError("Please enter a valid username and password");
      return;
    } else if (username.length < 3 || password.length < 3) {
      setError("Username or password too short");
      return;
    }
    const user = new User();
    user.username = username;
    user.password = password;
    user.username = usernameRef.current!.value;
    user.password = passwordRef.current!.value;
    authService.login(user).then(() => {
      if (adminguard.canActivateAdmin()) {
        navigate("/admin");
      } else {
        navigate("/testing");
      }
    });
  };

  const handleSubmit1 = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/register");
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="profile"
                className="profile"
              />
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  ref={usernameRef}
                  type="text"
                  placeholder="email"
                  className="name"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="second-input">
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="password"
                  className="name"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>

              {error ? <div className="error">{error}</div> : null}
              <button className="button" onClick={handleSubmit}>
                Login
              </button>

              <div>
                <div className="space">
                  <Stack direction="column" spacing={1}>
                    <Button color="inherit">Forgot password</Button>
                    <a className="mt-1">OR</a>
                    <Button
                      color="inherit"
                      onClick={() => navigate("/register")}
                    >
                      Sign Up
                    </Button>
                  </Stack>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../libs/Auth/AuthService";
import AdminGuard from "../../libs/Guards/AdminGuard";
import { User } from "../../libs/Model/User";
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const user = new User();
    user.username = username;
    user.password = password;
    authService.login(user).then(() => {
      if (adminguard.canActivate()) {
        navigate("/hello");
      } else {
        navigate("/test");
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
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
      <button onClick={handleSubmit1}>Register</button>
    </form>
  );
};

export default Login;

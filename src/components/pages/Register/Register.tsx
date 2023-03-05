import { Button, Stack } from "@mui/material";
import * as React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { AuthService } from "../../../libs/Auth/AuthService";
import AdminGuard from "../../../libs/Guards/AdminGuard";
import { User } from "../../../libs/Model/User";
// import { AuthService } from "./auth/autentificarea/AuthService";
// import { User } from "./auth/Model/User";
import "./Register.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cnp, setCnp] = useState("");
  const [phone, setPhone] = useState("");
  const authService = new AuthService();
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const cnpRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const adminguard = new AdminGuard(authService);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
  };

  const handleCnpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCnp(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const user = new User();
    user.username = username;
    user.password = password;
    user.name = name;
    user.surname = surname;
    user.cnp = cnp;
    user.phone = phone;
    authService.register(user).then(() => {
      navigate("/testing");
    });
  };

  return (
    <div className="main1">
      <div className="sub-main1">
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
              <div className="second-input1">
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="password"
                  className="name"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="second-input1">
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="name"
                  className="name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="second-input1">
                <input
                  ref={surnameRef}
                  type="text"
                  placeholder="surname"
                  className="name"
                  value={surname}
                  onChange={handleSurnameChange}
                />
              </div>
              <div className="second-input1">
                <input
                  ref={cnpRef}
                  type="text"
                  placeholder="cnp"
                  className="name"
                  value={cnp}
                  onChange={handleCnpChange}
                />
              </div>
              <div className="second-input1">
                <input
                  ref={phoneRef}
                  type="text"
                  placeholder="phone"
                  className="name"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>

              <button className="button" onClick={handleSubmit}>
                Register
              </button>

              <div>
                <div className="space">
                  <Stack direction="column" spacing={1}>
                    <Button color="inherit">Forgot password</Button>
                    <a className="mt-1">OR</a>
                    <Button color="inherit" onClick={() => navigate("/login")}>
                      Sign in
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

export default Register;

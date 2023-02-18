import * as React from "react";
import { useState } from "react";
import { AuthService } from "../../../libs/Auth/AuthService";
import { User } from "../../../libs/Model/User";
// import { AuthService } from "./auth/autentificarea/AuthService";
// import { User } from "./auth/Model/User";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cnp, setCnp] = useState("");
  const [phone, setPhone] = useState("");
  const authService = new AuthService();

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
    authService.register(user).then(() => {});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <br />
      <label>
        Surname:
        <input
          type="text"
          name="surname"
          value={surname}
          onChange={handleSurnameChange}
        />
      </label>
      <br />
      <label>
        CNP:
        <input type="text" name="cnp" value={cnp} onChange={handleCnpChange} />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
        />
      </label>
      <br />
      <button type="submit" onClick={handleSubmit}>
        Register
      </button>
    </form>
  );
};

export default Register;

import * as React from "react";
import { AuthService } from "../../../libs/Auth/AuthService";
// import { AuthService } from "./auth/autentificarea/AuthService";

const Unauthorized: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");
  const username = user.username;

  const authService = new AuthService();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    authService.logout();
  };

  return (
    <div>
      Hello, {username} you are not authorized to acces this route!<button onClick={handleSubmit}>Testing</button>
    </div>
  );
};

export default Unauthorized;

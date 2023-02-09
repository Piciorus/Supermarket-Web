import * as React from "react";
import { AuthService } from "../../libs/Auth/AuthService";
import { SupermarketService } from "../../libs/Services/SupermarketService";
import { UserService } from "../../libs/Services/UserService";
// import { AuthService } from "./auth/autentificarea/AuthService";
// import { SupermarketService } from "./auth/Services/SupermarketService";
// import { UserService } from "./auth/Services/UserService";

const GreetingPage: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");
  const username = user.username;
 
  const authService = new AuthService();
  const testrequest = ( event: React.FormEvent) => {
    event.preventDefault();

    SupermarketService.getAllSupermarkets().then((response: any) => {
      console.log(response);
    });

    UserService.getAllUsers().then((response: any) => {
      console.log(response);
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    authService.logout();
  };

  return (
    <div>
      Hello, {username}!WELCOMEEE HERE<button onClick={handleSubmit}>Logout</button>
      <button onClick={testrequest}>Logodadaut</button>
    </div>
  );
};

export default GreetingPage;

import * as React from "react";
import { useNavigate } from "react-router";
import { AuthService } from "../../libs/Auth/AuthService";
import { SupermarketService } from "../../libs/Services/SupermarketService";
import { UserService } from "../../libs/Services/UserService";
// import { AuthService } from "./auth/autentificarea/AuthService";
// import { SupermarketService } from "./auth/Services/SupermarketService";
// import { UserService } from "./auth/Services/UserService";

const GreetingPage: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");
  const username = user.username;
  const navigate = useNavigate();

  const authService = new AuthService();
  const testrequest = (event: React.FormEvent) => {
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
      Hello, {username}!WELCOMEEE HERE
      <button onClick={handleSubmit}>Logout</button>
      <button onClick={testrequest}>Test</button>
      <button onClick={() => navigate("/products")}>Go to products page</button>
      <div className="nav">
        <ul>Nested example</ul>
        <li>Try it</li>
        <li>Example</li>
      </div>
    </div>
  );
};

export default GreetingPage;

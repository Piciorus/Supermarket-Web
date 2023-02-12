import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiClient from "../Interceptors/AuthInterceptor";
import { User } from "../Model/User";

export class AuthService {
  private navigate = useNavigate();
  public user: User | undefined;

  public get userValue(): any {
    return JSON.parse(localStorage.getItem("user") || "{}");
  }

  public login(user: User) {
    return apiClient
      .post("/login", { username: user.username, password: user.password })
      .then((response: { data: any }) => {
        user.authData = window.btoa(user.username + ':' + user.password);
        localStorage.setItem("user", JSON.stringify({...response.data.data,authData:user.authData}));
        return response;
      });
  }

  public logout(): void {
    localStorage.removeItem("user");
    this.navigate("/login");
  }

  public register(user: User) {
    return apiClient
      .post("/register", {
        username: user.username,
        password: user.password,
        name: user.name,
        surname: user.surname,
        cnp: user.cnp,
        phone: user.phone,
      })
      .then((response: any) => {
        this.navigate("/hello");
        localStorage.setItem("user", JSON.stringify(user));
        return response;
      });
  }
}

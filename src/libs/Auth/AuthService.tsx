import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiClient from "../Interceptors/AuthInterceptor";
// import apiClient from "../Interceptors/auth-interceptor";
import { User } from "../Model/User";


export class AuthService {
  navigate = useNavigate();
  public user : User | undefined;
  

  
  get userValue():any{
    return JSON.parse(localStorage.getItem('user')||'{}');
  }


  login(user: User) {
    return apiClient
      .post("/login", { username: user.username, password: user.password })
      .then((response: { data: any; }) => {
        // console.log(response);
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("user1", JSON.stringify({username: user.username, password: user.password}));
        // this.navigate("/hello");
        return response;
      });
  }

  logout(): void {
    localStorage.removeItem("user");
    this.navigate("/login");
  }

  register(user: User) {
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

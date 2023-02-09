import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../Auth/AuthService";
// import { AuthService } from "../autentificarea/AuthService";

export default class AdminGuard {
  authService: AuthService;
  navigate: any;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  canActivate() {
    const user = this.authService.userValue;
    if (this.checkAdmin(user.roles)) {
        return true;
      }
    
     else {
      return false;
    }
  }

  checkAdmin(user: any){
    let isAdmin = false;
    user.forEach((role : any) => {
      if(role.role === "ADMIN") isAdmin = true;
    });
    return isAdmin;
  }

  checkClient(user: any){
    let isClient = false;
    user.forEach((role : any) => {
      if(role.role === "ADMIN") isClient = true;
    });
    return isClient;
  }
}

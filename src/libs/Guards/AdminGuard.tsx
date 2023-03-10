import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../Auth/AuthService";
// import { AuthService } from "../autentificarea/AuthService";

export default class AdminGuard {
  private authService: AuthService;

  public constructor(authService: AuthService) {
    this.authService = authService;
  }

  public canActivateAdmin() {
    const user = this.authService.userValue;
    if (this.checkAdmin(user.roles)) {
      return true;
    } else {
      return false;
    }
  }

  public checkAdmin(user: any) {
    let isAdmin = false;
    user.forEach((role: any) => {
      if (role.role === "ADMIN") isAdmin = true;
    });
    return isAdmin;
  }
}

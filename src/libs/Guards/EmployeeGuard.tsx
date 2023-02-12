import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../Auth/AuthService";
// import { AuthService } from "../autentificarea/AuthService";

export default class EmployeeGuard {
  private authService: AuthService;

  public constructor(authService: AuthService) {
    this.authService = authService;
  }

  public canActivateEmployee() {
    const user = this.authService.userValue;
    if (this.checkEmployee(user.roles)) {
      return true;
    } else {
      return false;
    }
  }

  public checkEmployee(user: any) {
    let isEmployee = false;
    user.forEach((role: any) => {
      if (role.role === "EMPLOYEE") isEmployee = true;
    });
    return isEmployee;
  }
}

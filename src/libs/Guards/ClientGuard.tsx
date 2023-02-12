import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../Auth/AuthService";
// import { AuthService } from "../autentificarea/AuthService";

export default class ClientGuard {
  private authService: AuthService;

  public constructor(authService: AuthService) {
    this.authService = authService;
  }

  public canActivateClient() {
    const user = this.authService.userValue;
    if (this.checkClient(user.roles)) {
      return true;
    } else {
      return false;
    }
  }

  public checkClient(user: any) {
    let isClient = false;
    user.forEach((role: any) => {
      if (role.role === "CLIENT") isClient = true;
    });
    return isClient;
  }
}

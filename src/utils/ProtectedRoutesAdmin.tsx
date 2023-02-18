import { useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthService } from "../libs/Auth/AuthService";
import AdminGuard from "../libs/Guards/AdminGuard";

interface Props {
  component: React.FC;
}

const AuthorizedRouteAdmin: React.FC<Props> = ({ component: Component }) => {
  const navigate = useNavigate();
  const authService = new AuthService();
  const adminguard = new AdminGuard(authService);

  useEffect(() => {
    if (!adminguard.canActivateAdmin()) {
      navigate("/unauthorized");
    }
  }, [adminguard, navigate]);

  return <Component />;
};

export default AuthorizedRouteAdmin
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthService } from "../libs/Auth/AuthService";
import ClientGuard from "../libs/Guards/ClientGuard";

interface Props {
  component: React.FC;
}

const AuthorizedRouteClient: React.FC<Props> = ({ component: Component }) => {
  const navigate = useNavigate();
  const authService = new AuthService();
  const clientguard = new ClientGuard(authService);

  useEffect(() => {
    if (!clientguard.canActivateClient()) {
      navigate("/unauthorized");
    }
  }, [clientguard, navigate]);

  return <Component />;
};

export default AuthorizedRouteClient;

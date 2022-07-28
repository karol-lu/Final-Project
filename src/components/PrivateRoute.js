import { PATHS } from "../utils/paths";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(PATHS.login);
    }
  }, []);

  return children;
};

export default PrivateRoute;

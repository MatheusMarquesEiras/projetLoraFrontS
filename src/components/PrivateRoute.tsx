import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    // Redireciona para login se não estiver autenticado
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;

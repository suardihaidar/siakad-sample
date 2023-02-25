import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Navbar from "./Navbar";

export const ProtectedRoute = () => {
  const { token } = useAuth();
  const outlet = useOutlet();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Navbar children={outlet} />
    </div>
  );
};

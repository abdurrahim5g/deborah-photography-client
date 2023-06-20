import { Navigate, useLocation } from "react-router-dom";
import { useAuthContex } from "../Contex/AuthProvider";
import Loading from "../components/Loading/Loading";

// eslint-disable-next-line react/prop-types
const Protected = ({ children }) => {
  const { user, loading } = useAuthContex();
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (!user?.uid) {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }

  return children;
};

export default Protected;

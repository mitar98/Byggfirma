import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const token = sessionStorage.getItem("basic_auth");
    if (!token) return <Navigate to="/admin" replace />;
    return children;
}
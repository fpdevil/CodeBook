import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
    const token = JSON.parse(sessionStorage.getItem('token'));

    // if token is not present, route to /login
    return token ? children : <Navigate to="/login" />;
};

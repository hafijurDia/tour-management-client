import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../components/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { FaSpinner } from "react-icons/fa";

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useContext(AuthContext);
    const location = useLocation();

    console.log(location); // This could be removed in production for security reasons

    // Check if still loading
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <FaSpinner className="spinner" />
            </div>
        );
    }

    // Check if user is authenticated
    if (currentUser) {
        return children;
    }

    // Redirect to login page if not authenticated
    return <Navigate state={{ from: location }} to="/login" />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;

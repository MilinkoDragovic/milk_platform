import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteTypes } from '../../routes/constants';

interface IDashboardPageProps {}

const DashboardPage: React.FunctionComponent<IDashboardPageProps> = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate(RouteTypes.LOGIN);
    };

    return (
        <div>
            <h2>This is dashboard page</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default DashboardPage;

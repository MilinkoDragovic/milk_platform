import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteTypes } from '../../routes/constants';

interface IAuthenticationPageProps {}

const AuthenticationPage: React.FunctionComponent<IAuthenticationPageProps> = () => {
    const navigate = useNavigate();
    const login = () => {
        localStorage.setItem('token', '123456789');
        navigate(RouteTypes.DASHBOARD);
    };
    return (
        <div>
            <h2>This is authentication page</h2>
            <button onClick={login}>Login</button>
        </div>
    );
};

export default AuthenticationPage;

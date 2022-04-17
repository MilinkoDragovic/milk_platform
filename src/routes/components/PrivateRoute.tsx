import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { RouteTypes } from '../constants';

interface IPrivateRouteProps {}

const useAuth = () => {
    const token = localStorage.getItem('token');
    return token ?? false;
};

const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = () => {
    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to={RouteTypes.LOGIN} />;
};

export default PrivateRoute;

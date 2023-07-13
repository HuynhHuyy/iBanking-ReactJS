import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
    return (
        <>
            <ToastContainer />
            <Container className="p-4 wrapper" fluid>
                <Outlet />
            </Container>
        </>
    );
};

export default AuthLayout;

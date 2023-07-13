import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import Header from '../Header';
import Sidebar from "../Sidebar";
import { ToastContainer } from 'react-toastify';

const FullLayout = () => {

    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/auth/login/user" />;
    }

    return (
        <>
        <ToastContainer />
        <main>
            <div className="pageWrapper d-lg-flex">
                {/********Sidebar**********/}
                <aside className="sidebarArea shadow" id="sidebarArea">
                    <Sidebar />
                </aside>
                {/********Content Area**********/}
                <div className="contentArea">
                    {/********header**********/}
                    <Header />
                    {/********Middle Content**********/}
                    <Container className="p-4 wrapper" fluid>
                        <Outlet />
                    </Container>
                </div>
            </div>
        </main>
        </>
    );
};

export default FullLayout;

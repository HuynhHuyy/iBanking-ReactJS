import { lazy } from "react";
import { Navigate } from "react-router-dom";
import AdminLog from "./views/AdminLogin/AdminLogin";
import Dashboard from "./views/Dashboard";

/****Layouts*****/
const FullLayout = lazy(() => import("./layouts/FullLayout"));
const AuthLayout = lazy(() => import("./layouts/AuthLayout"));

/***** Pages ****/

const About = lazy(() => import("./views/About"));
// const Alerts = lazy(() => import("./views/Alerts"));
const Transfers = lazy(() => import("./views/Transfers"));
const ConfirmTransfers = lazy(() => import("./views/ConfirmTransfers"));
const TransfersOtp = lazy(() => import("./views/TransfersOtp"));
const RegisterTransaction = lazy(() => import("./views/RegisterTransaction"));
const UserLogin = lazy(() => import("./views/UserLogin"));
const AdminLogin = lazy(() => import("./views/AdminLogin"));
const Error404 = lazy(() => import("./views/Error404"));
const ForgotUserID = lazy(() => import("./views/ForgotUserID"));
const ForgotPassword = lazy(() => import("./views/ForgotPassword"));
const Forgotpassword_Otp = lazy(() => import("./views/ForgotPassword/Forgot_Otp"));
const Changepassword = lazy(() => import("./views/ChangePassword"));
const OTP = lazy(() => import("./views/OTP"));

const AccountLocked = lazy(() => import("./views/AccountLocked"));
const NewPassword = lazy(() => import("./views/NewPassword"));
const AdminHomepage = lazy(() => import("./views/AdminHomepage"));

/*****Routes******/
const ErrorNotFound404 = { path: "*", element: <Error404 /> };

const RouterCfg = [
    {
        path: "/",
        // element: <Navigate to="/user/starter" />,
        element: <Navigate to="/auth/login/user" />,
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                children: [
                    { path: "user", element: <UserLogin /> },
                    { path: "admin", element: <AdminLogin /> },
                ]
            },
            { path: "register", element: <RegisterTransaction /> },
            { path: "forgot-user-id", element: <ForgotUserID /> },
            { path: "forgot-password", element: <ForgotPassword /> },
            { path: "ForgotpasswordOtp", element: <Forgotpassword_Otp /> },
            { path: "account-locked", element: <AccountLocked /> },
            { path: "new-password", element: <NewPassword /> },
            { path: "otp", element: <OTP /> },
            { path: "accountlocked", element: <AccountLocked /> },
            ErrorNotFound404,
        ]
    },
    {
        path: "/user",
        element: <FullLayout />,
        children: [
            { path: "*", element: <Navigate to="/user/dashboard" /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "profile", element: <About /> },
            { path: "transfers", element: <Transfers /> },
            { path: "confirm-transfers", element: <ConfirmTransfers /> },
            { path: "transfersotp", element: <TransfersOtp /> },
            { path: "changepassword", element: <Changepassword /> },




            // { path: "badges", element: <Badges /> },
            // { path: "buttons", element: <Buttons /> },
            // { path: "cards", element: <Cards /> },
            // { path: "grid", element: <Grid /> },
            // { path: "table", element: <Tables /> },
            // { path: "forms", element: <Forms /> },
            // { path: "breadcrumbs", element: <Breadcrumbs /> },
        ],
    },
    {
        path: "/admin",
        element: <AuthLayout />,
        children: [
            { path: "*", element: <Navigate to="/admin/homepage" /> },
            { path: "homepage", element: <AdminHomepage /> },
            { path: "login", element: <AdminLogin /> },
        ],
    },
    ErrorNotFound404,
];

export default RouterCfg;
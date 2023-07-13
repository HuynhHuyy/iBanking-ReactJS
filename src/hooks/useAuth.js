import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import * as appActions from '../actions';
import { useDispatch } from "react-redux";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("userLogin", null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = async (data) => {
        setUser(data);
        return navigate("/user/dashboard");
    };

    const logout = () => {
        setUser(null);
        dispatch(appActions.logout());
        return navigate("/");
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};

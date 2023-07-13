export const SESSION_LOGIN = 'SESSION_LOGIN';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';

export const login = (data) => dispatch =>
    dispatch({
        type: SESSION_LOGIN,
        payload: data
    });

export const logout = () => dispatch =>
    dispatch({
        type: SESSION_LOGOUT,
    });


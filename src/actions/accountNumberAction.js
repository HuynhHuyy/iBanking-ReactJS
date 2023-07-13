export const ACCOUNT_NUMBER_CREATE = 'ACCOUNT_NUMBER_CREATE';
export const ACCOUNT_NUMBER_DELETE = 'ACCOUNT_NUMBER_DELETE';

export const setAccountNumber = (data) => dispatch =>
    dispatch({
        type: ACCOUNT_NUMBER_CREATE,
        payload: data
    });

export const deleteAccoutNumber = () => dispatch =>
    dispatch({
        type: ACCOUNT_NUMBER_DELETE,
    });

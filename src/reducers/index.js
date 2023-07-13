import { combineReducers } from "redux";
import accountNumberReducer from "./accountNumberReducer";
import loginReducer from "./sessionReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    accountNumber: accountNumberReducer
});

export default rootReducer;
import { combineReducers } from "redux";
import loginSession from "./loginReducer";

const appReducers = combineReducers({
    loginSession
});

const rootReducer = (state, action) => {
    if(action.type === "LOGOUT_SUCCESS"){
        sessionStorage.removeItem("username");
    }
    return appReducers(state, action);
};

export default rootReducer;

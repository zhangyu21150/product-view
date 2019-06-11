import { combineReducers } from "redux";
import loginSession from "./loginReducer";

const appReducers = combineReducers({
    loginSession
});

const rootReducer = (state, action) => {
    return appReducers(state, action);
};

export default rootReducer;

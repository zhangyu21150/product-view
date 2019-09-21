import { combineReducers } from "redux";
import loginSession from "./loginReducer";
import modelListTree from "./modelListReducer";
import dataGrid from "./dataGridReducer";

const appReducers = combineReducers({
    loginSession,
    modelListTree,
    dataGrid
});

const rootReducer = (state, action) => {
    if(action.type === "LOGOUT_SUCCESS"){
        sessionStorage.removeItem("username");
    }
    return appReducers(state, action);
};

export default rootReducer;

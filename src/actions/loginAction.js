import {getURL, getParams } from "../util/service";
import history from "../history";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";
const lOGIN_LOADING = "lOGIN_LOADING";

export function loginSuccess(data){
    return {
        type: LOGIN_SUCCESS,
        data: data
    }
}

export function loginError(bool){
    return {
        type: LOGIN_ERROR,
        hasError: bool
    }
}

export function loginLoading(bool){
    return {
        type: lOGIN_LOADING,
        isLoading: bool
    }
}

function setSessionStorage(response){
    sessionStorage.setItem("authored", response.success);
}

export function fetchLogin(username, password, callback) {
    return  dispatch => {
        dispatch(loginLoading(true));
        let body = {"mobile": username, "pwd": password, verCode: ""};
        fetch(getURL("login"), getParams("login", body))
            .then(response => {
                dispatch(loginLoading(false));
                if(callback){
                    callback(response.status);
                }
                if(response.ok){
                    return response.json();
                }
                dispatch(loginError(true));
                throw new Error("login request error");
            })
            .then(response => {
                setSessionStorage(response);
                history.push("/overview");
                dispatch(loginSuccess(response));
            }).catch(error => {
                console.error(error);
            });
    }
}
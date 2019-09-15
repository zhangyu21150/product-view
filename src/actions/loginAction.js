import {getURL, getParams } from "../util/service";
import history from "../history";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";
const lOGIN_LOADING = "lOGIN_LOADING";

export function loginSuccess(data, username){
    return {
        type: LOGIN_SUCCESS,
        data: data,
        username: username
    }
}

export function logoutSuccess(){
    return {
        type: LOGOUT_SUCCESS
    }
}
export function loginError(bool){
    return {
        type: LOGIN_ERROR,
        hasError: bool
    }
}

export function loginLoading(bool, username){
    return {
        type: lOGIN_LOADING,
        isLoading: bool
    }
}

function setSessionStorage(username){
    sessionStorage.setItem("authentication", username);
}

export function fetchLogin(username, password, callback) {
    return  dispatch => {
        dispatch(loginLoading(true));
        let body = {"mobile": username, "pwd": password, verCode: ""};
        fetch(getURL("login"), getParams("login", body))
            .then(response => {
                dispatch(loginLoading(false));
                if(response.ok){
                    return response.json();
                }
                dispatch(loginError(true));
                throw new Error("login request error");
            })
            .then(response => {
                if(response.success){
                    setSessionStorage(username);
                    dispatch(loginSuccess(response, username));
                    history.push("/overview");
                }
                if(callback){
                    callback(response.success);
                }
            }).catch(error => {
                console.error(error);
            });
    }
}
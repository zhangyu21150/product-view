import api from "../config/api.json";

export function getHost(){
    return process.env["REACT_APP_" + process.env["REACT_APP_SERVER"] + "_HOST"];
}

export function getURL(key){
    return getHost() + process.env["REACT_APP_ROOT"] + api[key].uri
}

export function getParams(key, body){
    let params = {
        method: api[key].method,
        headers: new Headers(api[key].headers),
    };
    if(api[key].method == "POST"){
         params = {
             body: JSON.stringify(body),
             ...params
         }
    }
    return params;
}
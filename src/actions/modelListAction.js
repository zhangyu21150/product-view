import {getURL, getParams } from "../util/service";

const MODEL_LIST_SUCCESS = "MODEL_LIST_SUCCESS";
const MODEL_LIST_ERROR = "MODEL_LIST_ERROR";
const MODEL_LIST_LOADING = "MODEL_LIST_LOADING";

export function modelSuccess(data){
    return {
        type: MODEL_LIST_SUCCESS,
        data: data
    }
}

export function modelError(bool){
    return {
        type: MODEL_LIST_ERROR,
        hasError: bool
    }
}

export function modelLoading(bool){
    return {
        type: MODEL_LIST_LOADING,
        isLoading: bool
    }
}


export function fetchModelListTree() {
    return  dispatch => {
        dispatch(modelLoading(true));
        fetch(getURL("modelList"), getParams("modelList"))
            .then(response => {
                dispatch(modelLoading(false));
                if(response.ok){
                    return response.json();
                }
                dispatch(modelError(true));
                throw new Error("model lis request error");
            })
            .then(response => {
                dispatch(modelSuccess(processData(response)));
            }).catch(error => {
            console.error(error);
        });
    }
}

function processData(list){
    let modelList = [];
    for(let item of list){
        if(!item.pid){
            modelList.push({
                label: item.text,
                value: item.id,
                subList: []
            });
        }
    }
    for(let p of modelList){
        for(let c of list){
            if(p.value === c.pid){
                p.subList.push({
                    label: c.text,
                    value: c.id,
                    subList: []
                });
            }
        }
    }
    for(let p of modelList){
        for(let c of p.subList){
            for(let e of list){
                if(c.value === e.id){
                    c.subList.push({
                        label: e.text,
                        value: e.id
                    });
                }
            }
        }
    }
    sessionStorage.setItem("modelList", JSON.stringify(modelList));
    return modelList;
}
import {getURL, getParams } from "../util/service";

const DATA_GRID_SUCCESS = "DATA_GRID_SUCCESS";
const DATA_GRID_ERROR = "DATA_GRID_ERROR";
const DATA_GRID_LOADING = "DATA_GRID_LOADING";

export function dataGridSuccess(data){
    return {
        type: DATA_GRID_SUCCESS,
        data: data
    }
}

export function dataGridError(bool){
    return {
        type: DATA_GRID_ERROR,
        hasError: bool
    }
}

export function dataGridLoading(bool){
    return {
        type: DATA_GRID_LOADING,
        isLoading: bool
    }
}


export function fetchDataGrid(callback) {
    return  dispatch => {
        dispatch(dataGridLoading(true));
        fetch(getURL("overviewDataGird"), getParams("overviewDataGird"))
            .then(response => {
                dispatch(dataGridLoading(false));
                if(response.ok){
                    return response.json();
                }
                dispatch(dataGridError(true));
                throw new Error("dataGrid lis request error");
            })
            .then(response => {
                let datagrid = processData(response);
                dispatch(dataGridSuccess(datagrid));
                if(callback){
                    callback(datagrid);
                }
            }).catch(error => {
            console.error(error);
        });
    }
}

function processData(list){
   return list.rows ? list.rows: [];
}
const initalState = {
    data: {},
    hasError: false,
    isLoading: false
};

export default function dataGrid(state = initalState, action){
    switch (action.type) {
        case "DATA_GRID_SUCCESS":
            return {
                ...state,
                data: action.data
            };
        case "DATA_GRID_ERROR":
            return {
                ...state,
                hasError: action.hasError,
            };
        case "DATA_GRID_LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            };
        default:
            return state;
    }
}
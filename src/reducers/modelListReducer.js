const initalState = {
    data: {},
    hasError: false,
    isLoading: false
};

export default function modelListTree(state = initalState, action){
    switch (action.type) {
        case "MODEL_LIST_SUCCESS":
            return {
                ...state,
                data: action.data
            };
        case "MODEL_LIST_ERROR":
            return {
                ...state,
                hasError: action.hasError,
            };
        case "MODEL_LIST_LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            };
        default:
            return state;
    }
}
const initalState = {
    data: {},
    hasError: false,
    isLoading: false
};

export default function loginSession(state = initalState, action){
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                data: action.data

            };
        case "LOGIN_ERROR":
            return {
                ...state,
                hasError: action.hasError

            };
        case "lOGIN_LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            };
        default:
            return state;
    }
}
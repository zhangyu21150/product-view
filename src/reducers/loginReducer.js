const initalState = {
    data: {},
    hasError: false,
    isLoading: false,
    username: null
};

export default function loginSession(state = initalState, action){
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                data: action.data,
                username: action.username

            };
        case "LOGOUT_SUCCESS":
            return {
                data: {},
                username: null
            };
        case "LOGIN_ERROR":
            return {
                ...state,
                hasError: action.hasError,
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
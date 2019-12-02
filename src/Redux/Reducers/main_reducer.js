const initialState = {
    cl_loggedIn: false,
    cl_AuthToken: null,
    cl_AuthPort: null,
    cl_AuthUrl: null,
    cl_AuthWindow: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case "CL_LOGIN":
            return {
                ...state,
                cl_loggedIn: true
            };
        case "CL_LOGOUT":
            return {
                ...state,
                cl_loggedIn: false
            };
        case "SET_AUTH_TOKEN":
            return {
                ...state,
                cl_AuthToken: action.payload
            };
        case "SET_AUTH_PORT":
            return {
                ...state,
                cl_AuthPort: action.payload
            };
        case "SET_AUTH_URL":
            return {
                ...state,
                cl_AuthUrl: action.payload
            };
        case "TOGGLE_AUTH_WINDOW":
            return {
                ...state,
                cl_AuthWindow: (! state.cl_AuthWindow)
            };
        default:
            return state;
    }
}
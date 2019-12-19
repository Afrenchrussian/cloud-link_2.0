const initialState = {
    cl_loggedIn: false,
    cl_AuthToken: null,
    cl_AuthPort: null,
    cl_AuthUrl: null,
    cl_gridMaxHeight: null,
    cl_system_info: {},
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
        case "SET_HEIGHT":
            return {
                ...state,
                cl_gridMaxHeight : action.payload
            };
        case "SET_SYS_INFO":
            return {
                ...state,
                cl_system_info: action.payload
            }
        default:
            return state;
    }
}
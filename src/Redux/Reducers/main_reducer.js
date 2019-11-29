const initialState = {
    cl_loggedIn: false,
    cl_AuthToken: null
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
        default:
            return state;
    }
}
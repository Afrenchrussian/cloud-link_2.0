export const login = () => ({
    type: "CL_LOGIN"
});
export const logout = () => ({
    type: "CL_LOGOUT"
});
export const setAuthToken = payload => ({
    type: "SET_AUTH_TOKEN",
    payload
});
export const setAuthPort = payload => ({
    type: "SET_AUTH_PORT",
    payload
});
export const setAuthURL = payload => ({
    type: "SET_AUTH_URL",
    payload
});
export const toggleAuthWindow = () => ({
    type: "TOGGLE_AUTH_WINDOW",
});
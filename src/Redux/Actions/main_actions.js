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
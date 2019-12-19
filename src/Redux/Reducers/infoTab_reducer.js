const initialState = {
    cl_info_image: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_IMAGE":
            return {
                ...state,
                cl_info_image: action.payload
            };
        default:
            return state
    }
};

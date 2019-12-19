import { combineReducers } from 'redux'
import main_reducer from "./main_reducer";
import infoTab_reducer from "./infoTab_reducer";

export default combineReducers({
    main_reducer,
    infoTab_reducer
})
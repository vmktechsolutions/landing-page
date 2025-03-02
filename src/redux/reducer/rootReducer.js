import { combineReducers } from "redux";
import settings from "./settingReducer";

const appReducer = combineReducers({
    settings
})

export default appReducer
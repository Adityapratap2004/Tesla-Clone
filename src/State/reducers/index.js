import { combineReducers } from "redux";
import sideMenuReducer from "./sideMenuReducer";
const reducers=combineReducers({
        sidemenu:sideMenuReducer
})
export default reducers;
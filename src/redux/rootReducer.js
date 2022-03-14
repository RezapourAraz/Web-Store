import { combineReducers } from "redux";
import { userRducer } from "./reducer/userReducer";


export const rootReducer = combineReducers({
    currentUser: userRducer,
})
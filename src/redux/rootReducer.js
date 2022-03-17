import { combineReducers } from "redux";
// Reducers
import { userRducer } from "./reducer/userReducer";
import { productReducer } from "./reducer/productReducer";


export const rootReducer = combineReducers({
    currentUser: userRducer,
    products: productReducer,
})
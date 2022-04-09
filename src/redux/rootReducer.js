import { combineReducers } from "redux";
// Reducers
import { userRducer } from "./reducer/userReducer";
import { productReducer } from "./reducer/productReducer";
import { bannerReducer } from "./reducer/bannerReducer";


export const rootReducer = combineReducers({
    currentUser: userRducer,
    products: productReducer,
    banners: bannerReducer,
})
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Reducer
import { rootReducer } from "./redux/rootReducer";

// Store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
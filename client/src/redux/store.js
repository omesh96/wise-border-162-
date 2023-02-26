import { legacy_createStore, applyMiddleware,combineReducers ,  compose  } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./Cart/cart.reducer";
import { reducer } from "./reducer";

 const rootReducer = combineReducers({
    cartManager : cartReducer,
    products : reducer
})

const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer, composer (applyMiddleware(thunk)))


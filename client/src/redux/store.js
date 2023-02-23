import { legacy_createStore, applyMiddleware ,  compose  } from "redux";

import { reducer } from "./reducer";




import thunk from "redux-thunk";

const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(reducer, composer (applyMiddleware(thunk)))


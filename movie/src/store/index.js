import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

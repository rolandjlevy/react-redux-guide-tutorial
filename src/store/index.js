import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const preloadedState = {};

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

console.log("Inside Store");

const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(
      applyMiddleware(...middleware)
  )
);

export default store;
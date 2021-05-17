import { createStore, combineReducers, applyMiddleware } from "redux";
import { counterReducer } from "./counter/counterReducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

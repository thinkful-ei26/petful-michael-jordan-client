import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import adoptionReducer from "./reducers/adopt";
// import { reducer as formReducer } from "redux-form";

const store = createStore(
  combineReducers({
    adoptable: adoptionReducer
  }),
  applyMiddleware(thunk)
);

export default store;

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import catReducer from "./reducers/cat";
import dogReducer from "./reducers/dog";

const store = createStore(
  combineReducers({
    catData: catReducer,
    dogData: dogReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
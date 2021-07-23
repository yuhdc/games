import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { detailReducer } from "./detailsReducer";
import { gamesReducer } from "./gameReducers";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  //reducer
  games: gamesReducer,
  detail: detailReducer,
  users: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

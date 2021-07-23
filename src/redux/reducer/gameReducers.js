import {
  CLEAR_SEARCHED,
  FETCH_GAMES,
  FETCH_SEARCHED,
  LOADING_GAME_MENU,
} from "../constant";

const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  isloading: true,
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      return { ...state, ...action.payload, isloading: false };
    case FETCH_SEARCHED:
      return {
        ...state,
        ...action.payload,
        isloading: false,
      };
    case CLEAR_SEARCHED:
      return {
        ...state,
        searched: [],
      };
    case LOADING_GAME_MENU:
      return { ...state, isloading: true };
    default:
      return state;
  }
};

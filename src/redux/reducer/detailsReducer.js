import { GET_DETAIL, LOADING_DETAIL } from "../constant";

const initialState = {
  game: { platforms: [] },
  screen: { results: [] },
  isLoading: true,
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return { ...state, ...action.payload, isLoading: false };
    case LOADING_DETAIL:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

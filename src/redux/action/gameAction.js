import axios from "axios";
import {
  newGamesURL,
  popularGamesURL,
  searchGameURL,
  upcomingGamesURL,
} from "../../api";
import { FETCH_GAMES, FETCH_SEARCHED, LOADING_GAME_MENU } from "../constant";
import { createAction } from "./actionCreator";

export const loadGame = () => async (dispatch) => {
  dispatch({
    type: LOADING_GAME_MENU,
  });

  try {
    const popularResp = await axios.get(popularGamesURL());
    const newGamesResp = await axios.get(upcomingGamesURL());
    const upcomingResp = await axios.get(newGamesURL());
    dispatch(
      createAction({
        type: FETCH_GAMES,
        payload: {
          popular: popularResp.data.results,
          newGames: upcomingResp.data.results,
          upcoming: newGamesResp.data.results,
          searched: [],
        },
      })
    );
  } catch (er) {
    console.log(er);
  }
};

export const fetchSearch = (game_name) => async (dispatch) => {
  dispatch({
    type: LOADING_GAME_MENU,
  });

  const searchGames = await axios.get(searchGameURL(game_name));

  dispatch(
    createAction({
      type: FETCH_SEARCHED,
      payload: {
        searched: searchGames.data.results,
      },
    })
  );
};

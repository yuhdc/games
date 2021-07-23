import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../../api";
import { GET_DETAIL, LOADING_DETAIL } from "../constant";
import { createAction } from "./actionCreator";

export const loadDetail = (id) => async (dispatch) => {
  //pre-load
  dispatch({
    type: LOADING_DETAIL,
  });

  const detailResp = await axios.get(gameDetailsURL(id));
  const screenShotResp = await axios.get(gameScreenshotURL(id));

  //until this done then complete preload state
  dispatch(
    createAction({
      type: GET_DETAIL,
      payload: {
        game: detailResp.data,
        screen: screenShotResp.data,
      },
    })
  );
};

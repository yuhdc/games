import { DISPATCH_USER, USER_LOGIN, USER_LOGOUT } from "../constant";
import { createAction } from "./actionCreator";

export const setUser = (value) => {
  return (dispatch) => {
    dispatch(createAction({ type: DISPATCH_USER, payload: value }));
  };
};

export const userLogin = () => {
  return (dispatch) => {
    dispatch(createAction({ type: USER_LOGIN }));
  };
};

export const userLogout = () => {
  return (dispatch) => {
    dispatch(createAction({ type: USER_LOGOUT }));
  };
};

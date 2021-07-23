import { DISPATCH_USER, USER_LOGIN, USER_LOGOUT } from "../constant";

let initialState = {
  listUser: [
    {
      name: "Admin",
      dob: "2021/07/14",
      email: "admin@cdh.com",
      password: "01471996",
    },
  ],
  credential: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPATCH_USER:
      //upload more
      // return [...state, action.payload];
      //update
      let isExist = state.listUser.findIndex(
        (user) => user.email === action.payload.email
      );
      if (isExist === -1) {
        state.listUser.push(action.payload);
      }
      return { ...state };
    case USER_LOGIN:
      return { ...state, credential: true };
    case USER_LOGOUT:
      return { ...state, credential: false };
    default:
      return state;
  }
};

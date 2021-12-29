import { userActionTypes } from "../../actions/actionTypes";
import { UserActions, UserState } from "../../types";

const initialState: UserState = {
  user: { name: "James McQuarty", email: "jamesmcquarty@gmail.com" },
};

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case userActionTypes.CHANGE_NAME:
      return {
        ...state,
        user: { ...state.user, name: action.payload.newName },
      };
    default:
      return state;
  }
};

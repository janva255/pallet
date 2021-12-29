import { IUser } from "store/models/user";
import { userActionTypes } from "../actions/actionTypes";

export interface UserState {
  user: IUser;
}

export interface ChangeNamePayload {
  newName: string;
}

export type ChangeNameAction = {
  type: typeof userActionTypes.CHANGE_NAME;
  payload: ChangeNamePayload;
};

export type UserActions = ChangeNameAction;

import { ChangeNamePayload, ChangeNameAction } from "../../types";
import { userActionTypes } from "../actionTypes";

export const changeNameAction = (
  payload: ChangeNamePayload
): ChangeNameAction => ({
  type: userActionTypes.CHANGE_NAME,
  payload,
});

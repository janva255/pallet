import { combineReducers } from "redux";
import financeReducer from "./finance/financeReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  finance: financeReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

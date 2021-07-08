import { combineReducers } from "redux";
import authReducer from "./authReducer";
import birthdaysReducer from "./birthdaysReducer";

const reducer = combineReducers({
  auth: authReducer,
  birthdays: birthdaysReducer
});

export default reducer;

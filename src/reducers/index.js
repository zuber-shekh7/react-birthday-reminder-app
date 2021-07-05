import { combineReducers } from "redux";
import birthdaysReducer from "./birthdaysReducer";

const reducer = combineReducers({
  birthdays: birthdaysReducer,
});

export default reducer;

import { ADD_BIRTHDAY, FETCH_BIRTHDAYS } from "../types/birthdays";

const initialState = [];

const birthdaysReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BIRTHDAYS:
      return [...action.payload];
    case ADD_BIRTHDAY:
      return state;
    default:
      return state;
  }
};

export default birthdaysReducer;

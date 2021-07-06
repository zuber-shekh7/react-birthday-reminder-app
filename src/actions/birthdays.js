import birthdaysAPI from "../apis/birthdaysAPI";
import { ADD_BIRTHDAY, FETCH_BIRTHDAYS } from "../types/birthdays";

export const fetchBirthdays = () => {
  return async (dispath, getState) => {
    const response = await birthdaysAPI.get("birthdays/");
    dispath({ type: FETCH_BIRTHDAYS, payload: response.data });
  };
};

export const addBirthday = (name, birthdate) => {
  return async (dispatch, getState) => {
    try {
      const response = await birthdaysAPI.post("birthdays/new/", {
        name: name,
        birth_date: birthdate,
      });
      dispatch({ type: ADD_BIRTHDAY, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

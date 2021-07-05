import birthdaysAPI from "../apis/birthdaysAPI";
import { FETCH_BIRTHDAYS } from "../types/birthdays";

export const fetchBirthdays = () => {
  return async (dispath, getState) => {
    const response = await birthdaysAPI.get("birthdays/");
    dispath({ type: FETCH_BIRTHDAYS, payload: response.data });
  };
};

import birthdaysAPI from "../apis/birthdaysAPI";
import { ADD_BIRTHDAY, FETCH_BIRTHDAYS } from "../types/birthdays";
import FormData from "form-data";

export const fetchBirthdays = () => {
  return async (dispath, getState) => {
    const response = await birthdaysAPI.get("birthdays/");
    dispath({ type: FETCH_BIRTHDAYS, payload: response.data });
  };
};

export const addBirthday = (name, birthdate, image) => {
  return async (dispatch, getState) => {
    try {
      const data = new FormData();
      data.append("name", name);
      data.append("birth_date", birthdate);
      data.append("image", image, image.name);

      const response = await birthdaysAPI.post("birthdays/new/", data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      dispatch({ type: ADD_BIRTHDAY, payload: response.data });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

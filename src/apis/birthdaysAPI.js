import axios from "axios";

const birthdaysAPI = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default birthdaysAPI;

import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL || "http://localhost:3333/";
console.log(process.env.REACT_APP_API_URL);

export const api = axios.create({
  baseURL,
});

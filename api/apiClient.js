import axios from "axios";
// const BASE_URL = "https://jsonplaceholder.typicode.com";
const BASE_URL = "https://jsonplaceholder.typicode.com/users";
export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

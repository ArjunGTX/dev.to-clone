import axios from "axios";

const instance = axios.create({
  baseURL: "https://dev.to/api/articles",
});

export { instance };

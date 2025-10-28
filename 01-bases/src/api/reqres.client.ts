import axios from "axios";

export const reqres = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "x-api-key": "reqres-free-v1", // clave gratuita de ReqRes
  },
});

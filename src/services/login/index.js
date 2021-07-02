import axios from "axios";

const _URL = "http://localhost:3001/api/login";

export const login = (credentials) => {
  return axios.post(_URL, credentials).then((response) => {
    const { data } = response;
    return data;
  });
};

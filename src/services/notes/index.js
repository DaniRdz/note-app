import axios from "axios";

const _URL = "http://localhost:3001/api/notes";

export const getAllNotes = () => {
  return axios.get(_URL).then((response) => {
    const { data } = response;
    return data;
  });
};

export const createNewNote = ({ content }, { token }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.post(_URL, { content }, config).then((response) => {
    const { data } = response;
    return data;
  });
};

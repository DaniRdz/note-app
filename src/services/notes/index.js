import axios from "axios";

export const getAllNotes = () => {
  return axios.get("http://localhost:3001/api/notes").then((response) => {
    const { data } = response;
    return data;
  });
};

export const createNewNote = ({ content }) => {
  return axios
    .post("http://localhost:3001/api/notes", { content })
    .then((response) => {
      const { data } = response;
      return data;
    });
};

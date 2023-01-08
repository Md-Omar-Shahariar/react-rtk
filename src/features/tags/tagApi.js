import axios from "../../utils/axios";

export const geTags = async () => {
  const response = await axios.get("/tags");
  return response.data;
};

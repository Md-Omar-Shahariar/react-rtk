import axios from "../../utils/axios";

export const getVideos = async (tags, search, pagination) => {
  let query = "";
  if (tags.length > 0) {
    query += tags.map((tag) => `tags_like=${tag}`).join(`&`);
  }
  if (search !== "") {
    query += `&q=${search}&`;
  }

  console.log(query);
  const response = await axios.get(`/videos/?${query}`);
  const count = await response.data.length;
  const response2 = await axios.get(
    `/videos/?${query}&_start=${
      pagination > 1 ? (pagination - 1) * 8 : 0
    }&_limit=8`
  );
  console.log(query);

  return { response2, count };
};

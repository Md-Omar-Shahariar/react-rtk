import axios from "../../utils/axios";

export const getRelatedVideo = async ({ tags, id }) => {
  const limit = 5;
  let query =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `&id_ne=${id}&_limit=${limit}`;

  const response = await axios.get(`/videos?${query}`);
  return response.data;
};

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://loaclhost:9000",
});

export default axios;

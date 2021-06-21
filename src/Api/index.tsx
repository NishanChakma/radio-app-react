import axios from "axios";

const callLocationApi = axios.create({
  baseURL: "https://extreme-ip-lookup.com/json/",
});

export default callLocationApi;

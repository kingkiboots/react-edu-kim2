import axios from "axios";

export const sampleApiClient = axios.create({
  baseURL: `${process.env.REACT_APP_SAMPLE_API_BASE_URL}`,
  responseType: "json",
  withCredentials: true,
});

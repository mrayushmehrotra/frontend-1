import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://backend-51iyr7rji-ayushoopps-projects.vercel.app/",
  withCredentials: true,
});

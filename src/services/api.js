import axios from "axios";

const api = axios.create({
  baseURL: "https://mini-user-management-system-production-87fa.up.railway.app",
});

export default api;

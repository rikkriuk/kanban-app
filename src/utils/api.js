import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
});

const getTasks = () => api.get("/kanbans");
const getTasksById = (id) => api.get(`/kanbans/${id}`);
const postTasks = (data, id) => api.put(`/kanbans/${id}`, data);

export { getTasks, getTasksById, postTasks };

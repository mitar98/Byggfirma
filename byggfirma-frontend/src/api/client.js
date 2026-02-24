import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("basic_auth");
    if (token) config.headers.Authorization = `Basic ${token}`;
    return config;
});

export function setAuth(user, pass) {
    sessionStorage.setItem("basic_auth", btoa(`${user}:${pass}`));
}

export default api;
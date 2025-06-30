import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8890",
});

export interface RegisterPayload {
  username: string;
  password: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface Record {
  id: number;
  hash: string;
  date: string;
}

export const registerUser = (data: RegisterPayload) =>
  api.post("/register", data);

export const loginUser = (data: LoginPayload) =>
  api.post("/login", data);

export const getRecords = () =>
  api.get<Record[]>("/get_data");

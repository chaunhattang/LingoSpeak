import apiClient from "./client";
import endpoints from "./endpoints";
import { setToken, setUser } from "../utils/auth";
import type { User } from "../types/user";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  fullName?: string;
}

export interface UpdateProfilePayload {
  fullName?: string;
  image?: File;
}

export const register = (payload: RegisterPayload) =>
  apiClient.post<User>(endpoints.auth.register, payload).then((res) => res.data);

export const login = async (payload: LoginPayload): Promise<User> => {
  const data = await apiClient
    .post<{ token: string; expiration: string; user: User }>(endpoints.auth.login, payload)
    .then((res) => res.data);

  setToken(data.token);
  setUser(data.user);
  return data.user;
};

export const updateProfile = (id: string, payload: UpdateProfilePayload) => {
  const form = new FormData();
  if (payload.fullName) form.append("FullName", payload.fullName);
  if (payload.image) form.append("Image", payload.image);
  return apiClient.put<User>(endpoints.users.update(id), form).then((res) => res.data);
};

export const changePassword = (id: string, newPassword: string) => {
  const form = new FormData();
  form.append("Password", newPassword);
  return apiClient.put<User>(endpoints.users.update(id), form).then((res) => res.data);
};

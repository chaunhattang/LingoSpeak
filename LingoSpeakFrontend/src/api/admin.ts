import apiClient from "./client";
import endpoints from "./endpoints";
import type { UserResponse } from "../types/api";

export const getAllUsers = () =>
  apiClient.get<UserResponse[]>(endpoints.users.getAll).then((r) => r.data);

export const getUserById = (id: string) =>
  apiClient.get<UserResponse>(endpoints.users.getById(id)).then((r) => r.data);

export const updateUser = (id: string, payload: { fullName?: string; role?: string; password?: string }) => {
  const form = new FormData();
  if (payload.fullName) form.append("FullName", payload.fullName);
  if (payload.role) form.append("Role", payload.role);
  if (payload.password) form.append("Password", payload.password);
  return apiClient.put<UserResponse>(endpoints.users.update(id), form).then((r) => r.data);
};

export const deleteUser = (id: string) =>
  apiClient.delete<{ message: string }>(endpoints.users.delete(id)).then((r) => r.data);

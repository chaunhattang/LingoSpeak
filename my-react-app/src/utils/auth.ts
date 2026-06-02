import type { User } from "../types/user";

const TOKEN_KEY = "token";
const USER_KEY = "user";

export const getToken = (): string | null => localStorage.getItem(TOKEN_KEY);
export const setToken = (token: string): void => localStorage.setItem(TOKEN_KEY, token);
export const removeToken = (): void => localStorage.removeItem(TOKEN_KEY);

export const getUser = (): User | null => {
  const raw = localStorage.getItem(USER_KEY);
  return raw ? (JSON.parse(raw) as User) : null;
};
export const setUser = (user: User): void =>
  localStorage.setItem(USER_KEY, JSON.stringify(user));
export const removeUser = (): void => localStorage.removeItem(USER_KEY);

export const logout = (): void => {
  removeToken();
  removeUser();
};

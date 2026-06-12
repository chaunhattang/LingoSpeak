import apiClient from "./client";
import endpoints from "./endpoints";

export const markVocabularyStudied = (id: number) =>
  apiClient.post<{ message: string }>(endpoints.userProgress.markVocabulary(id)).then((r) => r.data);

export const unmarkVocabularyStudied = (id: number) =>
  apiClient.delete<{ message: string }>(endpoints.userProgress.unmarkVocabulary(id)).then((r) => r.data);

export const markConversationStudied = (id: number) =>
  apiClient.post<{ message: string }>(endpoints.userProgress.markConversation(id)).then((r) => r.data);

export const unmarkConversationStudied = (id: number) =>
  apiClient.delete<{ message: string }>(endpoints.userProgress.unmarkConversation(id)).then((r) => r.data);

export const markReadingStudied = (id: number) =>
  apiClient.post<{ message: string }>(endpoints.userProgress.markReading(id)).then((r) => r.data);

export const unmarkReadingStudied = (id: number) =>
  apiClient.delete<{ message: string }>(endpoints.userProgress.unmarkReading(id)).then((r) => r.data);

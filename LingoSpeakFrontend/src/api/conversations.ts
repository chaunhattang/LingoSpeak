import apiClient from "./client";
import endpoints from "./endpoints";
import type { Conversation, Translation } from "../types/api";

export const getAllConversations = () =>
  apiClient
    .get<Conversation[]>(endpoints.conversations.getAll)
    .then((r) => r.data);

export const getConversationById = (id: number) =>
  apiClient
    .get<Conversation>(endpoints.conversations.getById(id))
    .then((r) => r.data);

export interface MessagePayload {
  senderName: string;
  translation: Translation;
  order: number;
}

export interface ConversationPayload {
  topic: string;
  speaker1Name?: string;
  speaker2Name?: string;
  image?: File;
  messages?: MessagePayload[];
}

const buildFormData = (payload: ConversationPayload): FormData => {
  const form = new FormData();
  form.append("Topic", payload.topic);
  if (payload.speaker1Name) form.append("Speaker1Name", payload.speaker1Name);
  if (payload.speaker2Name) form.append("Speaker2Name", payload.speaker2Name);
  if (payload.image) form.append("Image", payload.image);
  if (payload.messages) {
    payload.messages.forEach((msg, i) => {
      form.append(`Messages[${i}].SenderName`, msg.senderName);
      form.append(
        `Messages[${i}].Translation.English`,
        msg.translation.english,
      );
      form.append(
        `Messages[${i}].Translation.Vietnamese`,
        msg.translation.vietnamese,
      );
      form.append(`Messages[${i}].Order`, String(msg.order));
    });
  }
  return form;
};

export const createConversation = (payload: ConversationPayload) =>
  apiClient
    .post<Conversation>(endpoints.conversations.create, buildFormData(payload))
    .then((r) => r.data);

export const updateConversation = (id: number, payload: ConversationPayload) =>
  apiClient
    .put<{
      message: string;
    }>(endpoints.conversations.update(id), buildFormData(payload))
    .then((r) => r.data);

export const deleteConversation = (id: number) =>
  apiClient
    .delete<{ message: string }>(endpoints.conversations.delete(id))
    .then((r) => r.data);

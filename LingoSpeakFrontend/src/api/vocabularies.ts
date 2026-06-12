import apiClient from "./client";
import endpoints from "./endpoints";
import type { Vocabulary, VocabularyItem, Translation } from "../types/api";

export const getAllVocabularies = () =>
  apiClient.get<Vocabulary[]>(endpoints.vocabularies.getAll).then((r) => r.data);

export const getVocabularyById = (id: number) =>
  apiClient.get<Vocabulary>(endpoints.vocabularies.getById(id)).then((r) => r.data);

export interface MessagePayload {
  senderName: string;
  translation: Translation;
  order: number;
}

export interface TopicConversationPayload {
  speaker1Name?: string;
  speaker2Name?: string;
  messages?: MessagePayload[];
}

export interface TopicReadingPayload {
  title: Translation;
  content: Translation;
}

const appendConversation = (form: FormData, conversation?: TopicConversationPayload) => {
  if (!conversation) return;
  if (conversation.speaker1Name) form.append("Speaker1Name", conversation.speaker1Name);
  if (conversation.speaker2Name) form.append("Speaker2Name", conversation.speaker2Name);
  if (conversation.messages) {
    conversation.messages.forEach((msg, i) => {
      form.append(`Messages[${i}].SenderName`, msg.senderName);
      form.append(`Messages[${i}].Translation.English`, msg.translation.english);
      form.append(`Messages[${i}].Translation.Vietnamese`, msg.translation.vietnamese);
      form.append(`Messages[${i}].Order`, String(msg.order));
    });
  }
};

const appendReading = (form: FormData, reading?: TopicReadingPayload) => {
  if (!reading) return;
  form.append("ReadingTitle.English", reading.title.english);
  form.append("ReadingTitle.Vietnamese", reading.title.vietnamese);
  form.append("ReadingContent.English", reading.content.english);
  form.append("ReadingContent.Vietnamese", reading.content.vietnamese);
};

export const createVocabulary = (
  topicNameEn: string,
  topicNameVi: string,
  image?: File,
  conversation?: TopicConversationPayload,
  reading?: TopicReadingPayload,
) => {
  const form = new FormData();
  form.append("TopicName.English", topicNameEn);
  form.append("TopicName.Vietnamese", topicNameVi);
  if (image) form.append("Image", image);
  appendConversation(form, conversation);
  appendReading(form, reading);
  return apiClient.post<Vocabulary>(endpoints.vocabularies.create, form).then((r) => r.data);
};

export const updateVocabulary = (
  id: number,
  topicNameEn: string,
  topicNameVi: string,
  image?: File,
  conversation?: TopicConversationPayload,
  reading?: TopicReadingPayload,
) => {
  const form = new FormData();
  form.append("TopicName.English", topicNameEn);
  form.append("TopicName.Vietnamese", topicNameVi);
  if (image) form.append("Image", image);
  appendConversation(form, conversation);
  appendReading(form, reading);
  return apiClient.put<{ message: string }>(endpoints.vocabularies.update(id), form).then((r) => r.data);
};

export const deleteVocabulary = (id: number) =>
  apiClient.delete<{ message: string }>(endpoints.vocabularies.delete(id)).then((r) => r.data);

export interface VocabularyItemPayload {
  meaningEn: string;
  meaningVi: string;
  ipa?: string;
  wordType?: string;
  description?: string;
  image?: File;
}

export const createVocabularyItem = (vocabId: number, payload: VocabularyItemPayload) => {
  const form = new FormData();
  form.append("Meaning.English", payload.meaningEn);
  form.append("Meaning.Vietnamese", payload.meaningVi);
  form.append("VocabularyTopicId", String(vocabId));
  if (payload.ipa) form.append("IPA", payload.ipa);
  if (payload.wordType) form.append("WordType", payload.wordType);
  if (payload.description) form.append("Description", payload.description);
  if (payload.image) form.append("Image", payload.image);
  return apiClient
    .post<VocabularyItem>(endpoints.vocabularies.createItem(vocabId), form)
    .then((r) => r.data);
};

export const updateVocabularyItem = (
  vocabId: number,
  itemId: number,
  payload: VocabularyItemPayload,
) => {
  const form = new FormData();
  form.append("Meaning.English", payload.meaningEn);
  form.append("Meaning.Vietnamese", payload.meaningVi);
  if (payload.ipa) form.append("IPA", payload.ipa);
  if (payload.wordType) form.append("WordType", payload.wordType);
  if (payload.description) form.append("Description", payload.description);
  if (payload.image) form.append("Image", payload.image);
  return apiClient
    .put<{ message: string }>(endpoints.vocabularies.updateItem(vocabId, itemId), form)
    .then((r) => r.data);
};

export const deleteVocabularyItem = (vocabId: number, itemId: number) =>
  apiClient
    .delete<{ message: string }>(endpoints.vocabularies.deleteItem(vocabId, itemId))
    .then((r) => r.data);

export interface Translation {
  english: string;
  vietnamese: string;
}

export interface VocabularyItem {
  id: number;
  meaning: Translation;
  ipa: string | null;
  wordType: string | null;
  description: string | null;
  image: string | null;
  vocabularyTopicId: number;
}

export interface Vocabulary {
  id: number;
  topicName: Translation;
  image: string | null;
  vocabularyItems: VocabularyItem[];
}

export interface ConversationMessage {
  senderName: string;
  translation: Translation;
  order: number;
}

export interface Conversation {
  id: number;
  topic: string;
  speaker1Name: string | null;
  speaker2Name: string | null;
  image: string | null;
  messages: ConversationMessage[];
}

export interface UserResponse {
  id: string;
  email: string;
  role: string;
  fullName: string | null;
  image: string | null;
  studiedConversationIds: number[];
  studiedVocabularyIds: number[];
}

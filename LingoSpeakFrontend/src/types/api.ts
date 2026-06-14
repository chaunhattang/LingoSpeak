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

export interface ConversationMessage {
  senderName: string;
  translation: Translation;
  order: number;
}

export interface Conversation {
  id: number;
  topic: string;
  image?: string | null;
  speaker1Name: string | null;
  speaker2Name: string | null;
  messages: ConversationMessage[];
}

export interface ReadingPassage {
  id: number;
  title: Translation;
  content: Translation;
}

export interface Vocabulary {
  id: number;
  topicName: Translation;
  image: string | null;
  vocabularyItems: VocabularyItem[];
  conversation: Conversation | null;
  reading: ReadingPassage | null;
}

export interface UserResponse {
  id: string;
  email: string;
  role: string;
  fullName: string | null;
  image: string | null;
  studiedConversationIds: number[];
  studiedVocabularyIds: number[];
  studiedReadingPassageIds: number[];
}

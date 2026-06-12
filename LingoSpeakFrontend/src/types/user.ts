export interface User {
  id: string;
  email: string;
  role: string;
  fullName: string | null;
  image: string | null;
  studiedConversationIds: number[];
  studiedVocabularyIds: number[];
}

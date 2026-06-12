const endpoints = {
  auth: {
    register: "/auth/register",
    login: "/auth/login",
  },
  users: {
    getAll: "/users",
    getById: (id: string) => `/users/${id}`,
    update: (id: string) => `/users/${id}`,
    delete: (id: string) => `/users/${id}`,
  },
  vocabularies: {
    getAll: "/vocabularies",
    getById: (id: number) => `/vocabularies/${id}`,
    create: "/vocabularies",
    update: (id: number) => `/vocabularies/${id}`,
    delete: (id: number) => `/vocabularies/${id}`,
    createItem: (vocabId: number) => `/vocabularies/${vocabId}/items`,
    updateItem: (vocabId: number, itemId: number) => `/vocabularies/${vocabId}/items/${itemId}`,
    deleteItem: (vocabId: number, itemId: number) => `/vocabularies/${vocabId}/items/${itemId}`,
  },
  userProgress: {
    markVocabulary: (id: number) => `/userprogress/vocabulary/${id}`,
    unmarkVocabulary: (id: number) => `/userprogress/vocabulary/${id}`,
    markConversation: (id: number) => `/userprogress/conversation/${id}`,
    unmarkConversation: (id: number) => `/userprogress/conversation/${id}`,
    markReading: (id: number) => `/userprogress/reading/${id}`,
    unmarkReading: (id: number) => `/userprogress/reading/${id}`,
  },
};

export default endpoints;

export interface WordItem {
  slug: string;
  word: string;
  meaning: string;
  pos: "NOUN" | "VERB";
  image: string;
}

export const wordsByTopic: Record<string, WordItem[]> = {
  environment: [
    {
      slug: "recycle",
      word: "RECYCLE",
      meaning: "Tái chế",
      pos: "VERB",
      image:
        "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9",
    },
    {
      slug: "pollution",
      word: "POLLUTION",
      meaning: "Ô nhiễm",
      pos: "NOUN",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    },
    {
      slug: "climate",
      word: "CLIMATE",
      meaning: "Khí hậu",
      pos: "NOUN",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
  ],

  travel: [
  {
    slug: "airport",
    word: "AIRPORT",
    meaning: "Sân bay",
    pos: "NOUN",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
  },
  {
    slug: "boarding-pass",
    word: "BOARDING PASS",
    meaning: "Vé lên máy bay",
    pos: "NOUN",
    image:
      "https://images.unsplash.com/photo-1580910051074-7e5f7f77f9c4",
  },
  {
    slug: "passport",
    word: "PASSPORT",
    meaning: "Hộ chiếu",
    pos: "NOUN",
    image:
      "https://images.unsplash.com/photo-1559060017-2a8f08b3c02a",
  },
],
};

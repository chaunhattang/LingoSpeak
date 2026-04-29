// src/data/vocabularyTopics.ts

import { Building2, Plane, Users, Laptop } from "lucide-react";

export interface Topic {
  id: number;
  title: string;
  progress: number;
  slug: string;
  icon: any;
  image: string;

  words?: number;
  sentences?: number;
}

export const vocabularyTopics = [
  {
    id: 1,
    title: "topics.company",
    words: 10,
    progress: 15,
    slug: "company",
    icon: Building2,
    image:
      "https://tuvanthanhtuyen.com/wp-content/uploads/2025/09/1-thanh-lap-1tv-min.png",
  },
  {
    id: 2,
    title: "topics.travel",
    words: 10,
    progress: 80,
    slug: "travel",
    icon: Plane,
    image: "https://booking.pystravel.vn/uploads/posts/avatar/1731596232.jpg",
  },
  {
    id: 3,
    title: "topics.family",
    words: 10,
    progress: 0,
    slug: "family",
    icon: Users,
    image:
      "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/07/hinh-anh-gia-dinh-hanh-phuc.jpg",
  },
  {
    id: 4,
    title: "topics.technology",
    words: 10,
    progress: 10,
    slug: "technology",
    icon: Laptop,
    image:
      "https://www.pace.edu.vn/uploads/news/2024/01/1-cong-nghe-so-la-gi.jpg",
  },
];

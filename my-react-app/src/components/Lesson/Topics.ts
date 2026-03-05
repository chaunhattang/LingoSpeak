// src/data/topics.ts
export interface Topic {
  id: number;
  title: string;
  words: number;
  progress: number;
  slug: string;
  icon: string;
  image: string;
}

export const topics: Topic[] = [
  {
    id: 1,
    title: "topics.environment",
    words: 25,
    progress: 40,
    slug: "environment",
    icon: "eco",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBe2KfWJqqDdzzOZeyHbJMuQdfnnZLvy3x7E9GpcwTs_AD8v3raNZtej0PeyDrHcogKxx0srzTyGiwlkzB3IR9rlCnITT3JyRNiJTwWCJOGNMRdUBJg09IYu1Le80o3sCsLzbjcD7-fRSpLM8py-K41KZOQhoUFY7Yz5pNCHT5KpIyWA5zpziydt_dP1Vu95VXzbh3An16umJJ7v__HXVkQ_fQiud6rgVQYkBhzmAuc5zXrmc93LDKlJR4wvvHDfAbjK7R1IwZdiKdB",
  },
  {
    id: 2,
    title: "topics.school",
    words: 30,
    progress: 0,
    slug: "school",
    icon: "school",
    image:
      "https://lh4.googleusercontent.com/proxy/YkowADixt3SUnl8P2AiTMCsDkdXX_7zJ1tQ_q9xg69M8pxQSLeYtrQe7Wro3qX_EavqYsEsWXVBBTql1D3SmEyHd-WvlB4kq5zLfElDiOvg8rogOQSlZJz0RLR8tnKA6w7FXoM6E305NsJrdO3c-rDKa_vBqhal62ZzxhMnHmC3j-3WU",
  },
  {
    id: 3,
    title: "topics.company",
    words: 40,
    progress: 15,
    slug: "company",
    icon: "office-building",
    image:
      "https://tuvanthanhtuyen.com/wp-content/uploads/2025/09/1-thanh-lap-1tv-min.png",
  },
  {
    id: 4,
    title: "topics.travel",
    words: 20,
    progress: 80,
    slug: "travel",
    icon: "travel",
    image: "https://booking.pystravel.vn/uploads/posts/avatar/1731596232.jpg",
  },
  {
    id: 5,
    title: "topics.family",
    words: 15,
    progress: 0,
    slug: "family",
    icon: "family",
    image:
      "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/07/hinh-anh-gia-dinh-hanh-phuc.jpg",
  },
  {
    id: 6,
    title: "topics.technology",
    words: 35,
    progress: 10,
    slug: "technology",
    icon: "technology",
    image:
      "https://www.pace.edu.vn/uploads/news/2024/01/1-cong-nghe-so-la-gi.jpg",
  },
  {
    id: 7,
    title: "topics.health",
    words: 32,
    progress: 0,
    slug: "health",
    icon: "halth",
    image: "https://cafefcdn.com/2018/10/12/photo-1-1539305257846963855301.jpg",
  },
  {
    id: 8,
    title: "topics.weather",
    words: 18,
    progress: 0,
    slug: "weather",
    icon: "weather",
    image:
      "https://photo.znews.vn/w660/Uploaded/tmuitg/2022_09_01/2_Luo_Xing.jpg",
  },
  {
    id: 9,
    title: "topics.food",
    words: 50,
    progress: 60,
    slug: "food",
    icon: "food",
    image:
      "https://thietbiquayphim.com/wp-content/uploads/2022/05/meo-chup-anh-do-an-toi-dep.png",
  },
  {
    id: 10,
    title: "topics.direction",
    words: 28,
    progress: 5,
    slug: "direction",
    icon: "direction",
    image:
      "https://media.istockphoto.com/id/455642243/vi/anh/c%E1%BA%A3m-th%E1%BA%A5y-m%E1%BA%A5t-ph%C6%B0%C6%A1ng-h%C6%B0%E1%BB%9Bng-ho%E1%BA%B7c-m%E1%BA%A5t-ph%C6%B0%C6%A1ng-h%C6%B0%E1%BB%9Bng.jpg?s=1024x1024&w=is&k=20&c=Y3XYDPOPUO1NQIuqypYZRUmEa1fRFwMmQmfYHaRovkU=",
  },
];

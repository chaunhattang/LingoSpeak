// src/data/topics.ts
export interface Topic {
  id: number;
  titleVi: string;
  titleEn: string;
  words: number;
  progress: number;
  icon: string;
  image: string;
}

export const topics: Topic[] = [
  {
    id: 1,
    titleVi: "Môi trường",
    titleEn: "Environment",
    words: 25,
    progress: 40,
    icon: "eco",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBe2KfWJqqDdzzOZeyHbJMuQdfnnZLvy3x7E9GpcwTs_AD8v3raNZtej0PeyDrHcogKxx0srzTyGiwlkzB3IR9rlCnITT3JyRNiJTwWCJOGNMRdUBJg09IYu1Le80o3sCsLzbjcD7-fRSpLM8py-K41KZOQhoUFY7Yz5pNCHT5KpIyWA5zpziydt_dP1Vu95VXzbh3An16umJJ7v__HXVkQ_fQiud6rgVQYkBhzmAuc5zXrmc93LDKlJR4wvvHDfAbjK7R1IwZdiKdB",
  },
  {
    id: 2,
    titleVi: "Trường học",
    titleEn: "School",
    words: 30,
    progress: 0,
    icon: "school",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyb1v5ipWk0q0dkYGRh_SXswTPONJ3gZPV0YQO3122mygd_SY_-aHU6N6V5KMFXbza2B9ZxuRFkkXzAwl7gOvR2UK3c7-uED3Ylsdhbj8lxfuq2kEbY8-KV_cFyg4FilrVxIbguQ251sMs10uz4GI86PPKKSeUqwrM1lKuahE3fLOTQDI7TPSV0BGkA59elliW_QEm37rt5XStDDw8giJNszrrOWqQ0b5zSzNpUfma6OoPHLOvOh3jumsuqMZg-4dkjDwAAvsvTkPl",
  },
];

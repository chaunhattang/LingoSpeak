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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyb1v5ipWk0q0dkYGRh_SXswTPONJ3gZPV0YQO3122mygd_SY_-aHU6N6V5KMFXbza2B9ZxuRFkkXzAwl7gOvR2UK3c7-uED3Ylsdhbj8lxfuq2kEbY8-KV_cFyg4FilrVxIbguQ251sMs10uz4GI86PPKKSeUqwrM1lKuahE3fLOTQDI7TPSV0BGkA59elliW_QEm37rt5XStDDw8giJNszrrOWqQ0b5zSzNpUfma6OoPHLOvOh3jumsuqMZg-4dkjDwAAvsvTkPl",
  },
  {
    id: 3,
    title: "topics.company",
    words: 40,
    progress: 15,
    slug: "company",
    icon: "Company",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyb1v5ipWk0q0dkYGRh_SXswTPONJ3gZPV0YQO3122mygd_SY_-aHU6N6V5KMFXbza2B9ZxuRFkkXzAwl7gOvR2UK3c7-uED3Ylsdhbj8lxfuq2kEbY8-KV_cFyg4FilrVxIbguQ251sMs10uz4GI86PPKKSeUqwrM1lKuahE3fLOTQDI7TPSV0BGkA59elliW_QEm37rt5XStDDw8giJNszrrOWqQ0b5zSzNpUfma6OoPHLOvOh3jumsuqMZg-4dkjDwAAvsvTkPl",
  },
  {
    id: 4,
    title: "topics.travel",
    words: 20,
    progress: 80,
    slug: "travel",
    icon: "Travel",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyb1v5ipWk0q0dkYGRh_SXswTPONJ3gZPV0YQO3122mygd_SY_-aHU6N6V5KMFXbza2B9ZxuRFkkXzAwl7gOvR2UK3c7-uED3Ylsdhbj8lxfuq2kEbY8-KV_cFyg4FilrVxIbguQ251sMs10uz4GI86PPKKSeUqwrM1lKuahE3fLOTQDI7TPSV0BGkA59elliW_QEm37rt5XStDDw8giJNszrrOWqQ0b5zSzNpUfma6OoPHLOvOh3jumsuqMZg-4dkjDwAAvsvTkPl",
  },
  {
    id: 5,
    title: "topics.family",
    words: 15,
    progress: 0,
    slug: "family",
    icon: "Family",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyb1v5ipWk0q0dkYGRh_SXswTPONJ3gZPV0YQO3122mygd_SY_-aHU6N6V5KMFXbza2B9ZxuRFkkXzAwl7gOvR2UK3c7-uED3Ylsdhbj8lxfuq2kEbY8-KV_cFyg4FilrVxIbguQ251sMs10uz4GI86PPKKSeUqwrM1lKuahE3fLOTQDI7TPSV0BGkA59elliW_QEm37rt5XStDDw8giJNszrrOWqQ0b5zSzNpUfma6OoPHLOvOh3jumsuqMZg-4dkjDwAAvsvTkPl",
  },
  {
    id: 6,
    title: "topics.technology",
    words: 35,
    progress: 10,
    slug: "technology",
    icon: "Technology",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyb1v5ipWk0q0dkYGRh_SXswTPONJ3gZPV0YQO3122mygd_SY_-aHU6N6V5KMFXbza2B9ZxuRFkkXzAwl7gOvR2UK3c7-uED3Ylsdhbj8lxfuq2kEbY8-KV_cFyg4FilrVxIbguQ251sMs10uz4GI86PPKKSeUqwrM1lKuahE3fLOTQDI7TPSV0BGkA59elliW_QEm37rt5XStDDw8giJNszrrOWqQ0b5zSzNpUfma6OoPHLOvOh3jumsuqMZg-4dkjDwAAvsvTkPl",
  },
  {
    id: 7,
    title: "topics.health",
    words: 32,
    progress: 0,
    slug: "health",
    icon: "Health",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyb1v5ipWk0q0dkYGRh_SXswTPONJ3gZPV0YQO3122mygd_SY_-aHU6N6V5KMFXbza2B9ZxuRFkkXzAwl7gOvR2UK3c7-uED3Ylsdhbj8lxfuq2kEbY8-KV_cFyg4FilrVxIbguQ251sMs10uz4GI86PPKKSeUqwrM1lKuahE3fLOTQDI7TPSV0BGkA59elliW_QEm37rt5XStDDw8giJNszrrOWqQ0b5zSzNpUfma6OoPHLOvOh3jumsuqMZg-4dkjDwAAvsvTkPl",
  },
  {
    id: 8,
    title: "topics.weather",
    words: 18,
    progress: 0,
    slug: "weather",
    icon: "Weather",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyb1v5ipWk0q0dkYGRh_SXswTPONJ3gZPV0YQO3122mygd_SY_-aHU6N6V5KMFXbza2B9ZxuRFkkXzAwl7gOvR2UK3c7-uED3Ylsdhbj8lxfuq2kEbY8-KV_cFyg4FilrVxIbguQ251sMs10uz4GI86PPKKSeUqwrM1lKuahE3fLOTQDI7TPSV0BGkA59elliW_QEm37rt5XStDDw8giJNszrrOWqQ0b5zSzNpUfma6OoPHLOvOh3jumsuqMZg-4dkjDwAAvsvTkPl",
  },
  {
    id: 9,
    title: "topics.food",
    words: 50,
    progress: 60,
    slug: "food",
    icon: "Food",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyb1v5ipWk0q0dkYGRh_SXswTPONJ3gZPV0YQO3122mygd_SY_-aHU6N6V5KMFXbza2B9ZxuRFkkXzAwl7gOvR2UK3c7-uED3Ylsdhbj8lxfuq2kEbY8-KV_cFyg4FilrVxIbguQ251sMs10uz4GI86PPKKSeUqwrM1lKuahE3fLOTQDI7TPSV0BGkA59elliW_QEm37rt5XStDDw8giJNszrrOWqQ0b5zSzNpUfma6OoPHLOvOh3jumsuqMZg-4dkjDwAAvsvTkPl",
  },
  {
    id: 10,
    title: "topics.direction",
    words: 28,
    progress: 5,
    slug: "direction",
    icon: "Direction",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyb1v5ipWk0q0dkYGRh_SXswTPONJ3gZPV0YQO3122mygd_SY_-aHU6N6V5KMFXbza2B9ZxuRFkkXzAwl7gOvR2UK3c7-uED3Ylsdhbj8lxfuq2kEbY8-KV_cFyg4FilrVxIbguQ251sMs10uz4GI86PPKKSeUqwrM1lKuahE3fLOTQDI7TPSV0BGkA59elliW_QEm37rt5XStDDw8giJNszrrOWqQ0b5zSzNpUfma6OoPHLOvOh3jumsuqMZg-4dkjDwAAvsvTkPl",
  },
];

// src/pages/Lesson.tsx

import Navbar from "../components/layout/Navbar";
import TopicCard from "../components/Lesson/TopicCard";
import { conversationTopics } from "../components/Lesson/conversationTopics";

const Lesson = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-4 md:px-10 py-10 mt-16 md:mt-24">
        <h1 className="text-3xl md:text-4xl font-black mb-6">
          Conversation Topics
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {conversationTopics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} mode="lesson" />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Lesson;

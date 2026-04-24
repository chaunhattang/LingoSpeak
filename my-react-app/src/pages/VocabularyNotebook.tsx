import Navbar from "../components/layout/Navbar";
import TopicCard from "../components/Lesson/TopicCard";
import type { Topic } from "../components/Lesson/Topics";
import { topics } from "../components/Lesson/Topics";

export default function VocabularyNotebook() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main className="max-w-[1200px] mx-auto px-4 md:px-10 py-10 mt-16 md:mt-24">
        <h1 className="text-3xl md:text-4xl font-black mb-6">Chủ đề từ vựng</h1>

        {/* Topic list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topics.map((topic: Topic) => (
            <TopicCard key={topic.id} topic={topic} basePath="/lesson" />
          ))}
        </div>
      </main>
    </div>
  );
}

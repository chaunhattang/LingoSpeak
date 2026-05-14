import Navbar from "../components/layout/Navbar";
import TopicCard from "../components/Lesson/TopicCard";
import { vocabularyTopics } from "../components/Lesson/vocabularyTopics";
export default function VocabularyNotebook() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main
        id="topics"
        className="max-w-[1200px] mx-auto px-4 md:px-10 py-10 mt-16 md:mt-24 scroll-mt-28"
      >
        <h1 className="text-3xl md:text-4xl font-black mb-6">
          Vocabulary Topics
        </h1>

        {/* Topic list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vocabularyTopics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} mode="vocabulary" />
          ))}
        </div>
      </main>
    </div>
  );
}

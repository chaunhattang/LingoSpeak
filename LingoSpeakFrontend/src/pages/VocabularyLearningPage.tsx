import RecordingToolbar from "../components/vocabulary/RecordingToolbar";

export default function VocabularyLearningPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-32">
      <main className="max-w-[1280px] mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-primary">
              Vocabulary Practice
            </h1>
            <p className="text-on-surface-variant">
              Learn vocabulary and practice reading aloud.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"></div>
        </div>
      </main>

      <RecordingToolbar />
    </div>
  );
}

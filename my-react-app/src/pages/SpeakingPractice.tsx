import PassageCard from "../components/PassageCard";
import ScoreDashboard from "../components/ScoreDashboard";
import RecordingToolbar from "../components/RecordingToolbar";

export default function ReadingPractice() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-32">

      <main className="max-w-[1280px] mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-primary">
              Speaking Practice
            </h1>
            <p className="text-on-surface-variant">
              Read the following passage aloud. We'll analyze your pronunciation
              and fluency.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PassageCard />
            </div>

            <ScoreDashboard />
          </div>
        </div>
      </main>

      <RecordingToolbar />
    </div>
  );
}

import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import ProfilePage from "./pages/ProfilePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import TopicsPage from "./pages/TopicsPage";
import TopicDetailPage from "./pages/TopicDetailPage";
import LessonSpeakingPractice from "./pages/LessonSpeakingPractice";
import SpeakingResult from "./pages/SpeakingResult";
import VocabularyFlashcard from "./pages/VocabularyFlashcard";
import ReadingPracticePage from "./pages/ReadingPracticePage";
import WordLesson from "./pages/WordLesson";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminTopicsPage from "./pages/admin/AdminTopicsPage";
import About from "./pages/About";

function App() {
  return (
    <>
      <Toaster richColors position="top-right" closeButton/>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />

        {/* Topics (Vocabulary + Conversation) */}
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/topics/:id" element={<TopicDetailPage />} />
        <Route path="/topics/:id/practice" element={<LessonSpeakingPractice />} />
        <Route path="/topics/:id/result" element={<SpeakingResult />} />
        <Route path="/topics/:id/word" element={<WordLesson />} />
        <Route path="/topics/:id/falastcard" element={<VocabularyFlashcard />} />
        <Route path="/topics/:id/reading" element={<ReadingPracticePage />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Profile */}
        <Route path="/profile" element={<ProfilePage />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsersPage />} />
          <Route path="topics" element={<AdminTopicsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

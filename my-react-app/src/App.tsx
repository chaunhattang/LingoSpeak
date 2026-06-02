import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import ProfilePage from "./pages/ProfilePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import LessonSpeakingPractice from "./pages/LessonSpeakingPractice";
import ConversationPage from "./pages/ConversationPage";
import SpeakingResult from "./pages/SpeakingResult";
import VocabularyNotebook from "./pages/VocabularyNotebook";
import VocabularyFlashcard from "./pages/VocabularyFlashcard";
import VocabularyLearningPage from "./pages/VocabularyLearningPage";
import WordLesson from "./pages/WordLesson";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminTopicsPage from "./pages/admin/AdminTopicsPage";
import AdminConversationsPage from "./pages/admin/AdminConversationsPage";
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

        {/* Lesson (Conversations) */}
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/lesson/:id" element={<ConversationPage />} />
        <Route path="/lesson/:id/practice" element={<LessonSpeakingPractice />} />
        <Route path="/lesson/:id/result" element={<SpeakingResult />} />

        {/* Vocabulary Notebook */}
        <Route path="/notebook" element={<VocabularyNotebook />} />
        <Route path="/notebook/:id/word" element={<WordLesson />} />
        <Route path="/notebook/:id/falastcard" element={<VocabularyFlashcard />} />
        <Route path="/notebook/:id/learning" element={<VocabularyLearningPage />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Profile */}
        <Route path="/profile" element={<ProfilePage />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsersPage />} />
          <Route path="topics" element={<AdminTopicsPage />} />
          <Route path="conversations" element={<AdminConversationsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

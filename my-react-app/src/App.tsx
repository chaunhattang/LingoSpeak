import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
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
function App() {
  const location = useLocation();

  const showNavbar =
    location.pathname === "/" || location.pathname.startsWith("/notebook");

  return (
    <>
      {/* {showNavbar && <Navbar />} */}

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />

        {/* ================= LESSON ================= */}

        <Route path="/lesson" element={<Lesson />} />

        <Route path="/lesson/:slug" element={<ConversationPage />} />

        <Route
          path="/lesson/:slug/practice"
          element={<LessonSpeakingPractice />}
        />

        <Route path="/lesson/:slug/result" element={<SpeakingResult />} />

        {/* ================= VOCABULARY ================= */}

        <Route path="/notebook" element={<VocabularyNotebook />} />
        <Route path="/notebook/:slug/word" element={<WordLesson />} />
        <Route
          path="/notebook/:slug/falastcard"
          element={<VocabularyFlashcard />}
        />

        <Route
          path="/notebook/:slug/learning"
          element={<VocabularyLearningPage />}
        />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;

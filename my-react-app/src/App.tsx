import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import WordLesson from "./pages/WordLesson";
import LearningPage from "./pages/LearningPage";
import FalastCard from "./pages/falastCard";

import VocabularyNotebook from "./pages/VocabularyNotebook";

function App() {
  const location = useLocation();

  const showNavbar =
    location.pathname === "/" ||
    location.pathname.startsWith("/lesson") ||
    location.pathname.startsWith("/notebook");
  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />

        <Route path="/lesson" element={<Lesson />} />

        <Route path="/lesson/:slug" element={<WordLesson />} />

        <Route path="/lesson/:slug/falastcard" element={<FalastCard />} />

        <Route path="/lesson/:slug/learning" element={<LearningPage />} />

        <Route path="/notebook" element={<VocabularyNotebook />} />
      </Routes>
    </>
  );
}

export default App;

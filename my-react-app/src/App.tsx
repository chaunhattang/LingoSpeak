import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import WordLesson from "./pages/WordLesson";
import LearningPage from "./pages/LearningPage";
import SpeakingPractice from "./pages/SpeakingPractice";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <Navbar />}

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/lesson/:slug" element={<WordLesson />} />
        <Route path="/lesson/:slug/learning" element={<LearningPage />} />
        <Route path="/lesson/:slug/speaking" element={<SpeakingPractice />} />
      </Routes>
    </>
  );
}

export default App;

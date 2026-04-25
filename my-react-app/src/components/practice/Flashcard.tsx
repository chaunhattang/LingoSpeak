import { useState } from "react";
import FlashcardFront from "./FlashcardFront";
import FlashcardBack from "./FlashcardBack";

export default function Flashcard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="w-full max-w-md h-[420px] perspective" onClick={handleFlip}>
      <div
        className={`relative w-full h-full duration-500 transform-style ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden">
          <FlashcardFront />
        </div>

        {/* Back */}
        <div className="absolute w-full h-full rotate-y-180 backface-hidden">
          <FlashcardBack />
        </div>
      </div>
    </div>
  );
}

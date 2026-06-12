import { useState } from "react";
import FlashcardFront from "./FlashcardFront";
import FlashcardBack from "./FlashcardBack";
import type { VocabularyItem } from "../../types/api";

interface Props {
  item: VocabularyItem;
}

export default function Flashcard({ item }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full max-w-md h-[420px] perspective"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div
        className={`relative w-full h-full duration-500 transform-style ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden">
          <FlashcardFront item={item} />
        </div>
        <div className="absolute w-full h-full rotate-y-180 backface-hidden">
          <FlashcardBack item={item} />
        </div>
      </div>
    </div>
  );
}

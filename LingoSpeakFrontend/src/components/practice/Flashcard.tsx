import { useRef, useState } from "react";
import FlashcardFront from "./FlashcardFront";
import FlashcardBack from "./FlashcardBack";
import type { VocabularyItem } from "../../types/api";
import luotFlashCard from "../../assets/sounds/luotFlashCard.mp3";
interface Props {
  item: VocabularyItem;
}

export default function Flashcard({ item }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipSoundRef = useRef(
    typeof Audio !== "undefined" ? new Audio(luotFlashCard) : null,
  );

  return (
    <div
      className="w-full max-w-md h-[420px] perspective"
      onClick={() => {
        if (flipSoundRef.current) {
          flipSoundRef.current.currentTime = 0;
          flipSoundRef.current.play();
        }

        setIsFlipped((prev) => !prev);
      }}
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

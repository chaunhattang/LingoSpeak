export default function FlashcardBack() {
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US"; // giọng tiếng Anh
    utterance.rate = 0.9; // tốc độ
    utterance.pitch = 1;

    window.speechSynthesis.cancel(); // dừng âm cũ
    window.speechSynthesis.speak(utterance);
  };
  return (
    <div className="absolute inset-0 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-8">
      <button
        onClick={(e) => {
          e.stopPropagation();
          speak("Environment");
        }}
        className="
    w-10
    h-10
    rounded-full
    bg-white/80
    hover:bg-white
    flex
    items-center
    justify-center
    transition
    shadow
  "
      >
        <span className="material-symbols-outlined">volume_up</span>
      </button>

      <h2 className="text-2xl font-bold text-blue-600">Environment</h2>

      <p className="text-gray-500 mb-6">/ɪnˈvaɪ.rən.mənt/</p>

      <div className="h-px w-16 bg-gray-200 mb-6" />

      <p className="text-lg font-semibold mb-6">Môi trường</p>

      <div className="bg-gray-100 p-4 rounded-xl w-full">
        The <strong>environment</strong> is our most precious resource.
      </div>

      <p className="text-sm text-gray-500 mt-6">Tap to flip</p>
    </div>
  );
}

export default function FlashcardFront() {
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="absolute inset-0 bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
      {/* Image */}
      <div className="h-1/2 w-full relative">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh7FCrbhdqwDDECfuJvlAW44w210mBdpT6EbOzMqzc8tQ4DPdibwCx4fYcEV2xrTdyjAXTIPyMeM-yCAjGXFnKlHWBoTfE5nlvmDAxKgG2HRdef_v91WZuag_XwREQieUKykTEqxr4TN8Je9ZqZjheaiqlSWXBNf-M4M_LV5j2c1aB6p2eDwoxXYfYLbpDcNGngWs1SW_XW8z4xlbfgNalk3y1Jf8wn3J1eEf7uaEUEHHdZ1H7pRCqrwbV-8kB6w8kESMY1IjDOGc"
          className="w-full h-full object-cover"
        />

        {/* BUTTON SOUND */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // không flip card
            speak("The environment is our most precious resource.");
          }}
          className="
            absolute
            top-4
            left-4
            bg-white
            px-3
            py-1
            rounded-lg
            shadow-sm
            hover:bg-gray-50
            transition
          "
        >
          🔊 Listen
        </button>
      </div>

      {/* Text */}
      <div className="h-1/2 p-6 flex flex-col justify-center items-center text-center">
        <p className="text-lg font-semibold">
          The <strong>environment</strong> is our most precious resource.
        </p>

        <p className="text-sm text-gray-500 mt-4">Tap to flip</p>
      </div>
    </div>
  );
}

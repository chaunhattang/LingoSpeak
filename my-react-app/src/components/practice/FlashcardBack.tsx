export default function FlashcardBack() {
  return (
    <div className="absolute inset-0 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-8">
      <button className="mb-4 bg-gray-100 p-3 rounded-full">🔊</button>

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

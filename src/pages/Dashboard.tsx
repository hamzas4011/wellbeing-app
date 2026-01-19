import { useState } from "react";

export default function Dashboard() {
  const [mood, setMood] = useState<number | null>(null);

  return (
    <main className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">
        Daily wellbeing check-in
      </h1>

      <p className="mb-6 text-gray-600">
        Take a moment to reflect on how you are feeling today.
      </p>

      <div className="mb-6">
        <p className="mb-2 font-medium">
          How do you feel today? (1 = very bad, 5 = very good)
        </p>

        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setMood(value)}
              className={`px-4 py-2 border rounded focus:outline-none focus:ring ${
                mood === value
                  ? "bg-blue-600 text-white"
                  : "bg-white"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

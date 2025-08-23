"use client";
import { useState } from "react";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; content: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // tampilkan pesan user
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setLoading(true);

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "ai", content: data.answer }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Terjadi kesalahan, coba lagi nanti." },
      ]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-amber-50 p-4">
      <div className="w-full max-w-lg bg-white text-black shadow-xl rounded-2xl flex flex-col p-4 h-[80vh]">
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto space-y-3 mb-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-2xl max-w-[80%] ${
                msg.role === "user"
                  ? "bg-blue-500 text-white self-end ml-auto"
                  : "bg-gray-200 text-black self-start mr-auto"
              }`}
            >
              {msg.content}
            </div>
          ))}
          {loading && (
            <div className="p-3 rounded-2xl bg-gray-200 text-black self-start mr-auto animate-pulse">
              Mengetik...
            </div>
          )}
        </div>

        {/* Input box */}
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Tulis pertanyaan seputar mental health..."
            className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 disabled:bg-gray-400"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}

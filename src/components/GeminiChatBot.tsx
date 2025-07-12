import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

const STORAGE_KEY = 'habi_chat_history';

export default function GeminiChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // 마운트 시 로컬스토리지에서 불러오기
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch {}
    }
  }, []);

  // messages가 바뀔 때마다 저장
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  async function handleSend() {
    if (!input.trim() || loading) return;
    setMessages(msgs => [...msgs, { role: 'user', content: input }]);
    setInput('');
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/gemini-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, email: typeof window !== 'undefined' ? localStorage.getItem('email') : '' })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Unknown error');
      setMessages(msgs => [...msgs, { role: 'ai', content: data.text }]);
    } catch (err: any) {
      let msg = 'Failed to get response';
      if (typeof err === 'string') msg = err;
      else if (err instanceof Error) msg = err.message;
      else if (err && typeof err === 'object' && 'message' in err) msg = String((err as any).message);
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-6 flex flex-col h-[500px]">
      <h3 className="text-xl font-bold mb-4 text-center">AI Mortgage Chatbot (Gemini)</h3>
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto mb-4 space-y-3">
        {messages.length === 0 && (
          <div className="text-gray-400 text-center mt-16">Ask me anything about mortgages, home buying, or loans!</div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
            {msg.role === 'ai' ? (
              (() => {
                // 1. 요약(첫 문장) + 상세(아래) 분리
                const firstLineBreak = msg.content.indexOf('\n');
                let summary = '';
                let detail = '';
                if (firstLineBreak > 0) {
                  summary = msg.content.slice(0, firstLineBreak).trim();
                  detail = msg.content.slice(firstLineBreak).trim();
                } else {
                  // 마크다운 제목이 맨 앞에 올 경우(### 등)
                  const firstPeriod = msg.content.indexOf('. ');
                  if (firstPeriod > 0) {
                    summary = msg.content.slice(0, firstPeriod + 1).trim();
                    detail = msg.content.slice(firstPeriod + 1).trim();
                  } else {
                    summary = msg.content;
                    detail = '';
                  }
                }
                return (
                  <div className="bg-gray-100 text-gray-800 inline-block px-4 py-2 rounded-lg text-left max-w-full">
                    <div className="font-bold text-blue-700 mb-1">{summary}</div>
                    {detail && (
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown>{detail}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                );
              })()
            ) : (
              <div className="inline-block px-4 py-2 rounded-lg bg-blue-600 text-white">{msg.content}</div>
            )}
          </div>
        ))}
      </div>
      {error && <div className="text-red-600 text-center mb-2">{error}</div>}
      <div className="flex gap-2">
        <textarea
          className="flex-1 border rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
          rows={2}
          placeholder="Type your question..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-blue-700 transition disabled:opacity-60"
          onClick={handleSend}
          disabled={loading || !input.trim()}
        >
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
} 
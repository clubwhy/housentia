"use client";
import { useState } from 'react';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!email || !password || !confirm) {
      setError('모든 항목을 입력하세요.');
      return;
    }
    if (password !== confirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || '회원가입 실패');
      setSuccess(true);
    } catch (e: any) {
      setError(e.message || '회원가입 실패');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f7fa] to-[#b2ebf2]">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-primary">Sign Up</h1>
        {success ? (
          <div className="text-green-600 text-center font-semibold py-8">회원가입이 완료되었습니다!<br/>로그인 후 이용해 주세요.</div>
        ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            required
          />
          {error && <div className="text-red-600 text-center text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-2 rounded-lg hover:bg-primary-dark transition"
            disabled={loading}
          >
            {loading ? '가입 중...' : 'Create Account'}
          </button>
        </form>
        )}
        <p className="text-center text-gray-500 mt-4 text-sm">
          Already have an account? <a href="/login" className="text-primary underline">Log in</a>
        </p>
      </div>
    </div>
  );
} 
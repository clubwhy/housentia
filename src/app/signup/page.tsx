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
    const emailRule = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRule.test(email)) {
      setError('Invalid email address.');
      return;
    }
    const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,15}$/;
    if (!passwordRule.test(password)) {
      setError('Password must be 8-15 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }
    if (!email || !password || !confirm) {
      setError('모든 항목을 입력하세요.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
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
      // 중복 이메일 에러 처리
      if (res.status === 409) {
        setError('This email is already registered. Please try a different email. If you believe this is an error, contact us via the inquiry page below.');
        setSuccess(false);
        return;
      }
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
        {!success && (
          <h1 className="text-2xl font-bold mb-6 text-center text-primary">Sign Up</h1>
        )}
        {success ? (
          <div className="text-green-700 text-center font-semibold py-8 space-y-4">
            <div className="text-2xl font-bold mb-2">You're In!</div>
            <div>Your Housentia account has been successfully created.</div>
            <div className="mt-6">
              <div className="flex flex-col items-center justify-center gap-2">
                <a href="/mortgage/find-the-right-loan" title="Try Ask Habi">
                  <img src="/habi.png" alt="Ask Habi Logo" className="w-20 h-auto mb-1 object-contain mx-auto" />
                </a>
                <div className="font-bold text-lg">Next Step: Log in and try Ask Habi for free.</div>
              </div>
              <div className="mt-2 text-base text-gray-700">Let our AI guide you to the perfect mortgage — smarter, faster, and easier than ever.</div>
            </div>
          </div>
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
          <div className="text-xs text-gray-500 mb-1">Password must be 8-15 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.</div>
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
            {loading ? 'Signing up...' : 'Create Account'}
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
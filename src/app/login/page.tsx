"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [tooManyFails, setTooManyFails] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setTooManyFails(false);
    setSuccess(false);
    setLoading(true);
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429) setTooManyFails(true);
        throw new Error(data.error || 'Login failed');
      }
      setSuccess(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('email', email);
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      }
    } catch (e: any) {
      setError(e.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f7fa] to-[#b2ebf2]">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-primary">Log In</h1>
        {success ? (
          <div className="text-green-700 text-center font-semibold py-8">Login successful!<br/>Welcome back.</div>
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
          {error && <div className="text-red-600 text-center text-sm">{error}</div>}
          {tooManyFails && (
            <div className="text-yellow-700 text-center text-sm mt-2">
              Too many failed attempts today.<br/>
              <a href="/forgot-password" className="underline text-primary">Forgot password?</a>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-2 rounded-lg hover:bg-primary-dark transition"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
        )}
        <p className="text-center text-gray-500 mt-4 text-sm">
          Don&apos;t have an account? <a href="/signup" className="text-primary underline">Sign up</a>
        </p>
        <p className="text-center text-sm mt-2">
          <a href="/forgot-password" className="text-primary underline">Forgot password?</a>
        </p>
      </div>
    </div>
  );
} 
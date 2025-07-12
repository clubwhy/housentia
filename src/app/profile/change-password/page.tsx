"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChangePasswordPage() {
  const [current, setCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,15}$/;
    if (!passwordRule.test(password)) {
      setError("Password must be 8-15 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
      return;
    }
    if (password !== confirm) {
      setError("New passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const email = typeof window !== 'undefined' ? localStorage.getItem('email') : '';
      const res = await fetch("/api/profile/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, current, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to change password.");
      setSuccess(true);
    } catch (e: any) {
      setError(e.message || "Failed to change password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f7fa] to-[#b2ebf2]">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-primary">Change Password</h1>
        {success ? (
          <div className="text-green-700 text-center font-semibold py-8">
            Your password has been changed successfully.<br />
            <button className="mt-4 text-primary underline" onClick={() => router.push("/profile")}>Back to Profile</button>
          </div>
        ) : (
          <form className="space-y-4 text-left" onSubmit={handleSubmit}>
            <div>
              <label className="block font-semibold mb-1">Current Password</label>
              <input type="password" className="w-full border rounded-lg px-4 py-2" value={current} onChange={e => setCurrent(e.target.value)} required />
            </div>
            <div>
              <label className="block font-semibold mb-1">New Password</label>
              <input type="password" className="w-full border rounded-lg px-4 py-2" value={password} onChange={e => setPassword(e.target.value)} required />
              <div className="text-xs text-gray-500 mb-1">Password must be 8-15 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.</div>
            </div>
            <div>
              <label className="block font-semibold mb-1">Confirm New Password</label>
              <input type="password" className="w-full border rounded-lg px-4 py-2" value={confirm} onChange={e => setConfirm(e.target.value)} required />
            </div>
            {error && <div className="text-red-600 text-center text-sm">{error}</div>}
            <button type="submit" className="w-full bg-primary text-white font-bold py-2 rounded-lg hover:bg-primary-dark transition" disabled={loading}>{loading ? "Changing..." : "Change Password"}</button>
          </form>
        )}
      </div>
    </div>
  );
} 
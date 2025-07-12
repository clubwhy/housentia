"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import usStates from "@/data/usStates.json";
import { useCallback } from "react";

function ChangePasswordTab({ email }: { email: string }) {
  const [current, setCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,15}$/;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
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
  };
  return (
    <div className="py-4">
      <h2 className="text-xl font-bold mb-4 text-primary">Change Password</h2>
      {success ? (
        <div className="text-green-700 text-center font-semibold py-8">
          Your password has been changed successfully.
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
  );
}

function HabiUsageLogTab({ email }: { email: string }) {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!email) return;
    setLoading(true);
    fetch(`/api/habi-log?email=${encodeURIComponent(email.trim().toLowerCase())}`)
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(data => {
        setLogs(Array.isArray(data.logs) ? data.logs : []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load usage log.");
        setLoading(false);
      });
  }, [email]);
  return (
    <div className="py-4">
      <h2 className="text-xl font-bold mb-4 text-primary">Habi Usage Log</h2>
      {loading ? (
        <div className="text-gray-400">Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : logs.length === 0 ? (
        <div className="text-gray-500">No usage log found.</div>
      ) : (
        <div className="max-h-96 overflow-y-auto text-left">
          {logs.map(log => (
            <div key={log.id} className="mb-4 p-3 rounded border bg-gray-50">
              <div className="text-xs text-gray-500 mb-1 flex gap-2">
                <span>{log.role === 'user' ? 'User' : 'AI'}</span>
                <span>{new Date(log.created_at).toLocaleString()}</span>
                <span>IP: {log.ip}</span>
              </div>
              <div className={log.role === 'user' ? 'text-blue-700' : 'text-gray-800'}>{log.message}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProfilePage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [tab, setTab] = useState<'profile' | 'password' | 'log'>('profile');

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEmail = localStorage.getItem("email") || "";
      setEmail(storedEmail);
      if (storedEmail) {
        fetch(`/api/profile?email=${encodeURIComponent(storedEmail)}`)
          .then(res => res.ok ? res.json() : null)
          .then(data => {
            if (data) {
              setName(data.name || "");
              setPhone(data.phone || "");
              setAddress1(data.address1 || "");
              setAddress2(data.address2 || "");
              setCity(data.city || "");
              setState(data.state || "");
              setZipcode(data.zipcode || "");
            }
            setLoading(false);
          })
          .catch(() => setLoading(false));
      } else {
        setLoading(false);
      }
    }
  }, []);

  function formatUSPhone(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length < 4) return digits;
    if (digits.length < 7) return `(${digits.slice(0,3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);
    try {
      // 저장 시에는 숫자만 추출해서 전송
      const phoneDigits = phone.replace(/\D/g, "");
      await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          phone: phoneDigits,
          address1,
          address2,
          city,
          state,
          zipcode
        })
      });
      setSuccess("Profile updated successfully.");
    } catch (e: any) {
      setError(e.message || "Failed to update profile.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return null;

  if (!email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f7fa] to-[#b2ebf2]">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl text-center">
          <h1 className="text-2xl font-bold mb-6 text-primary">My Profile</h1>
          <div className="text-red-600 font-semibold mb-4">You are not logged in.</div>
          <a href="/login" className="text-primary underline">Go to Login</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f7fa] to-[#b2ebf2] py-2" style={{paddingTop: 10, paddingBottom: 10}}>
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl text-center">
        <h1 className="text-2xl font-bold mb-6 text-primary">My Profile</h1>
        {/* 탭 메뉴 */}
        <div className="flex justify-center mb-6 gap-2">
          <button onClick={() => setTab('profile')} className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 ${tab==='profile' ? 'border-primary text-primary bg-blue-50' : 'border-transparent text-gray-500 bg-transparent'} transition`}>My Profile</button>
          <button onClick={() => setTab('password')} className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 ${tab==='password' ? 'border-primary text-primary bg-blue-50' : 'border-transparent text-gray-500 bg-transparent'} transition`}>Change Password</button>
          <button onClick={() => setTab('log')} className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 ${tab==='log' ? 'border-primary text-primary bg-blue-50' : 'border-transparent text-gray-500 bg-transparent'} transition`}>Habi Usage Log</button>
        </div>
        {/* 탭별 내용 */}
        {tab === 'profile' && (
        <form className="space-y-4 text-left" onSubmit={handleSave}>
          <div className="mb-2"><b>Email:</b> <span className="font-mono text-gray-700">{email}</span></div>
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Phone</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2"
              value={formatUSPhone(phone)}
              onChange={e => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              maxLength={14}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Address 1</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2" value={address1} onChange={e => setAddress1(e.target.value)} placeholder="Street address, P.O. box, company name, c/o" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Address 2</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2" value={address2} onChange={e => setAddress2(e.target.value)} placeholder="Apartment, suite, unit, building, floor, etc." />
          </div>
          <div>
            <label className="block font-semibold mb-1">City</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2" value={city} onChange={e => setCity(e.target.value)} placeholder="City" />
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block font-semibold mb-1">State</label>
              <select className="w-full border rounded-lg px-4 py-2" value={state} onChange={e => setState(e.target.value)}>
                <option value="">Select state</option>
                {usStates.map((s: string) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">Zipcode</label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2"
                value={zipcode}
                onChange={e => setZipcode(e.target.value.replace(/\D/g, ""))}
                placeholder="Zipcode"
                maxLength={10}
              />
            </div>
          </div>
          {error && <div className="text-red-600 text-center text-sm">{error}</div>}
          {success && <div className="text-green-700 text-center text-sm">{success}</div>}
          <button type="submit" className="w-full bg-primary text-white font-bold py-2 rounded-lg hover:bg-primary-dark transition" disabled={saving}>{saving ? "Saving..." : "Save Profile"}</button>
        </form>
        )}
        {tab === 'password' && <ChangePasswordTab email={email} />}
        {tab === 'log' && <HabiUsageLogTab email={email} />}
        <a href="/" className="block text-primary underline mt-6">Back to Home</a>
      </div>
    </div>
  );
} 
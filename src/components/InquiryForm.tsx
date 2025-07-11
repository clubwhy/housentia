import { useEffect, useState } from 'react';

interface TypeOption {
  code: string;
  label: string;
}

interface InquiryFormValues {
  goal: string;
  consultant: string;
  method: string;
  schedule_date: string;
  schedule_time: string;
  name: string;
  zipcode: string;
  email: string;
  phone: string;
  type: string;
}

const initialValues: InquiryFormValues = {
  goal: '',
  consultant: '',
  method: '',
  schedule_date: '',
  schedule_time: '',
  name: '',
  zipcode: '',
  email: '',
  phone: '',
  type: '',
};

export default function InquiryForm() {
  const [values, setValues] = useState<InquiryFormValues>(initialValues);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [options, setOptions] = useState<{
    goal: TypeOption[];
    consultant: TypeOption[];
    method: TypeOption[];
    type: TypeOption[];
  }>({ goal: [], consultant: [], method: [], type: [] });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // Load options from API
  useEffect(() => {
    async function fetchOptions() {
      setLoading(true);
      const cats = ['goal', 'consultant', 'method', 'inquiry_type'];
      const result: any = {};
      for (const cat of cats) {
        const res = await fetch(`/api/types?category=${cat}`);
        result[cat] = await res.json();
      }
      setOptions({
        goal: result.goal || [],
        consultant: result.consultant || [],
        method: result.method || [],
        type: result.inquiry_type || [],
      });
      setLoading(false);
    }
    fetchOptions();
  }, []);

  // Validation
  function validate(vals: InquiryFormValues) {
    const errs: { [k: string]: string } = {};
    if (!vals.goal) errs.goal = 'Required';
    if (!vals.consultant) errs.consultant = 'Required';
    if (!vals.method) errs.method = 'Required';
    if (!vals.schedule_date) errs.schedule_date = 'Required';
    if (!vals.schedule_time) errs.schedule_time = 'Required';
    if (!vals.name) errs.name = 'Required';
    if (!vals.zipcode) errs.zipcode = 'Required';
    if (!vals.email) errs.email = 'Required';
    if ((vals.method === 'phone' || vals.method === 'text') && !vals.phone) errs.phone = 'Required for phone/text';
    if (!vals.type) errs.type = 'Required';
    return errs;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setApiError(null);
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitting(true);
      try {
        const res = await fetch('/api/online-inquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        const data = await res.json();
        if (res.ok && data.success) {
          setSubmitted(true);
        } else {
          setApiError(data.error || 'Submission failed. Please try again.');
        }
      } catch (err) {
        setApiError('Network error. Please try again.');
      } finally {
        setSubmitting(false);
      }
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow p-8 text-center">
        <h3 className="text-xl font-bold mb-4 text-green-700">Thank you for your inquiry!</h3>
        <div className="text-gray-700 mb-4">We received your request. Here is a summary:</div>
        <div className="text-left max-w-md mx-auto mb-6">
          <ul className="space-y-1">
            <li><b>Goal:</b> {values.goal}</li>
            <li><b>Consultant:</b> {values.consultant}</li>
            <li><b>Method:</b> {values.method}</li>
            <li><b>Date:</b> {values.schedule_date}</li>
            <li><b>Time:</b> {values.schedule_time}</li>
            <li><b>Name:</b> {values.name}</li>
            <li><b>Zipcode:</b> {values.zipcode}</li>
            <li><b>Email:</b> {values.email}</li>
            <li><b>Phone:</b> {values.phone}</li>
            <li><b>Type:</b> {values.type}</li>
          </ul>
        </div>
        {/* Account creation flow will be added later */}
      </div>
    );
  }

  return (
    <form className="bg-white rounded-2xl shadow p-8 max-w-2xl mx-auto" onSubmit={handleSubmit}>
      <h3 className="text-xl font-bold mb-6 text-gray-900 text-center">Request a Free Consultation</h3>
      {apiError && <div className="text-red-600 text-center mb-4 font-semibold">{apiError}</div>}
      {loading ? (
        <div className="text-center text-gray-400">Loading options…</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">Mortgage Goal</label>
            <select name="goal" value={values.goal} onChange={handleChange} className="w-full border rounded px-3 py-2" required>
              <option value="">Select</option>
              {options.goal.map(opt => <option key={opt.code} value={opt.code}>{opt.label}</option>)}
            </select>
            {errors.goal && <div className="text-red-500 text-sm mt-1">{errors.goal}</div>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Consultant Type</label>
            <select name="consultant" value={values.consultant} onChange={handleChange} className="w-full border rounded px-3 py-2" required>
              <option value="">Select</option>
              {options.consultant.map(opt => <option key={opt.code} value={opt.code}>{opt.label}</option>)}
            </select>
            {errors.consultant && <div className="text-red-500 text-sm mt-1">{errors.consultant}</div>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Consultation Method</label>
            <select name="method" value={values.method} onChange={handleChange} className="w-full border rounded px-3 py-2" required>
              <option value="">Select</option>
              {options.method.map(opt => <option key={opt.code} value={opt.code}>{opt.label}</option>)}
            </select>
            {errors.method && <div className="text-red-500 text-sm mt-1">{errors.method}</div>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Preferred Date</label>
            <input type="date" name="schedule_date" value={values.schedule_date} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            {errors.schedule_date && <div className="text-red-500 text-sm mt-1">{errors.schedule_date}</div>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Preferred Time</label>
            <input type="time" name="schedule_time" value={values.schedule_time} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            {errors.schedule_time && <div className="text-red-500 text-sm mt-1">{errors.schedule_time}</div>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input type="text" name="name" value={values.name} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Zip Code</label>
            <input type="text" name="zipcode" value={values.zipcode} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            {errors.zipcode && <div className="text-red-500 text-sm mt-1">{errors.zipcode}</div>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input type="email" name="email" value={values.email} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Phone Number</label>
            <input type="text" name="phone" value={values.phone} onChange={handleChange} className="w-full border rounded px-3 py-2" />
            {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Inquiry Type</label>
            <select name="type" value={values.type} onChange={handleChange} className="w-full border rounded px-3 py-2" required>
              <option value="">Select</option>
              {options.type.map(opt => <option key={opt.code} value={opt.code}>{opt.label}</option>)}
            </select>
            {errors.type && <div className="text-red-500 text-sm mt-1">{errors.type}</div>}
          </div>
        </div>
      )}
      <button type="submit" className="mt-8 w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-60" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</button>
    </form>
  );
} 
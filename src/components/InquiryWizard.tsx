import { useState } from 'react';

const METHODS = [
  { code: 'zoom', label: 'Zoom' },
  { code: 'phone', label: 'Phone call' },
  { code: 'email', label: 'Email' },
  { code: 'text', label: 'Text' },
];

const TOPICS = [
  { code: 'buy_home', label: 'Buy a home', consultant: 'real_estate_agent', inquiry: 'realtor' },
  { code: 'mortgage', label: 'Mortgage', consultant: 'loan_officer', inquiry: 'mortgage' },
  { code: 'see_homes', label: 'See homes', consultant: 'real_estate_agent', inquiry: 'realtor' },
  { code: 'solar', label: 'Solar panels', consultant: 'solar_agent', inquiry: 'solar' },
  { code: 'upgrade', label: 'Home upgrade', consultant: 'loan_officer', inquiry: 'mortgage' },
  { code: 'repair', label: 'Home repair', consultant: 'loan_officer', inquiry: 'mortgage' },
];

export default function InquiryWizard() {
  const [step, setStep] = useState(0);
  const [method, setMethod] = useState<string | null>(null);
  const [topic, setTopic] = useState<string | null>(null);
  const [consultant, setConsultant] = useState<string | null>(null);
  const [inquiryType, setInquiryType] = useState<string | null>(null);
  const [dates, setDates] = useState<{ date: string; time: string }[]>([{ date: '', time: '' }]);
  const [name, setName] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Step 0: CTA
  if (step === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <button
          className="bg-blue-600 text-white text-xl font-bold px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          onClick={() => setStep(1)}
        >
          Schedule an appointment with Free consultant
        </button>
      </div>
    );
  }

  // Step 1: Consultation Method
  if (step === 1) {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8 text-center">
        <h3 className="text-2xl font-bold mb-6">Select a preferred consultation method?</h3>
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          {METHODS.map(opt => (
            <button
              key={opt.code}
              type="button"
              className={
                'px-8 py-4 rounded-xl text-lg font-semibold border-2 transition shadow ' +
                (method === opt.code
                  ? 'bg-blue-600 text-white border-blue-700 shadow-lg'
                  : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-50')
              }
              onClick={() => {
                setMethod(opt.code);
                setStep(2);
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {method && <div className="mt-4 text-green-700 font-semibold">Selected: {METHODS.find(m => m.code === method)?.label}</div>}
      </div>
    );
  }

  // Step 2: Topic/Goal
  if (step === 2) {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8 text-center">
        <h3 className="text-2xl font-bold mb-6">What do you want to consult about?</h3>
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          {TOPICS.map(opt => (
            <button
              key={opt.code}
              type="button"
              className={
                'px-8 py-4 rounded-xl text-lg font-semibold border-2 transition shadow ' +
                (topic === opt.code
                  ? 'bg-blue-600 text-white border-blue-700 shadow-lg'
                  : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-50')
              }
              onClick={() => {
                setTopic(opt.code);
                setConsultant(opt.consultant);
                setInquiryType(opt.inquiry);
                setStep(3);
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {topic && <div className="mt-4 text-green-700 font-semibold">Selected: {TOPICS.find(t => t.code === topic)?.label}</div>}
      </div>
    );
  }

  // Step 3: Date/Time selection
  if (step === 3) {
    function handleDateChange(idx: number, field: 'date' | 'time', value: string) {
      setDates(dates => dates.map((d, i) => i === idx ? { ...d, [field]: value } : d));
    }
    function addDate() {
      if (dates.length < 3) setDates([...dates, { date: '', time: '' }]);
    }
    function removeDate(idx: number) {
      if (dates.length > 1) setDates(dates.filter((_, i) => i !== idx));
    }
    const canProceed = dates.some(d => d.date && d.time);
    return (
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8 text-center">
        <h3 className="text-2xl font-bold mb-6">Select up to 3 preferred dates and times for your consultation</h3>
        <div className="space-y-4 mb-6">
          {dates.map((dt, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center gap-3 justify-center">
              <input
                type="date"
                value={dt.date}
                onChange={e => handleDateChange(idx, 'date', e.target.value)}
                className="border rounded px-3 py-2 w-40"
                required
              />
              <input
                type="time"
                value={dt.time}
                onChange={e => handleDateChange(idx, 'time', e.target.value)}
                className="border rounded px-3 py-2 w-32"
                required
              />
              {dates.length > 1 && (
                <button type="button" onClick={() => removeDate(idx)} className="ml-2 text-red-500 hover:underline text-sm">Remove</button>
              )}
            </div>
          ))}
        </div>
        {dates.length < 3 && (
          <button type="button" onClick={addDate} className="mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 font-semibold">+ Add another</button>
        )}
        <div>
          <button
            type="button"
            className="mt-4 w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
            disabled={!canProceed}
            onClick={() => setStep(4)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  // Step 4: Personal Info
  if (step === 4) {
    const needsPhone = method === 'phone' || method === 'text';
    const canProceed = name && zipcode && email && (!needsPhone || phone);
    return (
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8 text-center">
        <h3 className="text-2xl font-bold mb-6">Your Contact Information</h3>
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-1 text-left">Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-left">Zip Code</label>
            <input type="text" value={zipcode} onChange={e => setZipcode(e.target.value)} className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-left">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border rounded px-3 py-2" required />
          </div>
          {needsPhone && (
            <div>
              <label className="block font-semibold mb-1 text-left">Phone Number</label>
              <input type="text" value={phone} onChange={e => setPhone(e.target.value)} className="w-full border rounded px-3 py-2" required />
            </div>
          )}
        </div>
        <button
          type="button"
          className="mt-4 w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
          disabled={!canProceed}
          onClick={() => setStep(5)}
        >
          Next
        </button>
      </div>
    );
  }

  // Step 5: Review & Submit
  if (step === 5) {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8 text-center">
        <h3 className="text-2xl font-bold mb-6">Review Your Information</h3>
        {apiError && <div className="text-red-600 mb-4 font-semibold">{apiError}</div>}
        <div className="text-left max-w-md mx-auto mb-6">
          <ul className="space-y-1">
            <li><b>Consultation Method:</b> {METHODS.find(m => m.code === method)?.label}</li>
            <li><b>Topic:</b> {TOPICS.find(t => t.code === topic)?.label}</li>
            <li><b>Preferred Dates/Times:</b>
              <ul className="ml-4 list-disc">
                {dates.filter(d => d.date && d.time).map((d, i) => (
                  <li key={i}>{d.date} {d.time}</li>
                ))}
              </ul>
            </li>
            <li><b>Name:</b> {name}</li>
            <li><b>Zip Code:</b> {zipcode}</li>
            <li><b>Email:</b> {email}</li>
            {(method === 'phone' || method === 'text') && <li><b>Phone:</b> {phone}</li>}
          </ul>
        </div>
        <button
          type="button"
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
          disabled={submitting}
          onClick={async () => {
            setApiError(null);
            setSubmitting(true);
            try {
              // Prepare data for API
              const payload = {
                type: inquiryType,
                goal: topic,
                consultant: consultant,
                method,
                // Store only the first preferred date/time for now
                schedule_date: dates[0]?.date,
                schedule_time: dates[0]?.time,
                name,
                zipcode,
                email,
                phone: (method === 'phone' || method === 'text') ? phone : '',
              };
              const res = await fetch('/api/online-inquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
              });
              const data = await res.json();
              if (res.ok && data.success) {
                setSubmitted(true);
                setStep(6);
              } else {
                setApiError(data.error || 'Submission failed. Please try again.');
              }
            } catch (err) {
              setApiError('Network error. Please try again.');
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    );
  }

  // Step 6: Thank You
  if (step === 6 && submitted) {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-green-700">Thank you for your inquiry!</h3>
        <div className="text-gray-700 mb-4">We received your request. Here is a summary:</div>
        <div className="text-left max-w-md mx-auto mb-6">
          <ul className="space-y-1">
            <li><b>Consultation Method:</b> {METHODS.find(m => m.code === method)?.label}</li>
            <li><b>Topic:</b> {TOPICS.find(t => t.code === topic)?.label}</li>
            <li><b>Preferred Dates/Times:</b>
              <ul className="ml-4 list-disc">
                {dates.filter(d => d.date && d.time).map((d, i) => (
                  <li key={i}>{d.date} {d.time}</li>
                ))}
              </ul>
            </li>
            <li><b>Name:</b> {name}</li>
            <li><b>Zip Code:</b> {zipcode}</li>
            <li><b>Email:</b> {email}</li>
            {(method === 'phone' || method === 'text') && <li><b>Phone:</b> {phone}</li>}
          </ul>
        </div>
        <div className="text-lg font-semibold text-blue-700">We will contact you soon!</div>
      </div>
    );
  }

  // ... further steps will be added ...

  return null;
} 
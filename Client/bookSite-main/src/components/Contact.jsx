import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const endpoint = apiUrl.endsWith('/api') ? '/api/contact' : `${apiUrl}/contact`;
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error('Failed to send message');
      
      setStatus('success');
      setFormData({ firstName: '', lastName: '', company: '', email: '', phoneNumber: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-24 sm:py-32 lg:px-8 font-poppins overflow-x-hidden">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-4 text-lg leading-8 text-slate-500">
          Have questions or need assistance? Feel free to reach out to our team.
        </p>
      </div>

      <div className="mx-auto max-w-xl bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 relative">
        {/* Subtle decorative background blur for the card */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-60 -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-50 rounded-full blur-3xl opacity-60 -z-10"></div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-slate-700">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-xl border-0 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-shadow"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-slate-700">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-xl border-0 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-shadow"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-medium leading-6 text-slate-700">
                Company
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                  className="block w-full rounded-xl border-0 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-shadow"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-700">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-xl border-0 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-shadow"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-slate-700">
                Phone number
              </label>
              <div className="relative mt-2">
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  autoComplete="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="block w-full rounded-xl border-0 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-shadow"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-slate-700">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-xl border-0 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-shadow resize-none"
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            {status === 'success' && (
              <div className="mb-4 p-4 text-sm text-green-800 bg-green-50 rounded-xl">
                Your message has been sent successfully! We will get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="mb-4 p-4 text-sm text-red-800 bg-red-50 rounded-xl">
                There was an error sending your message. Please try again later.
              </div>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`block w-full rounded-xl px-4 py-3.5 text-center text-sm font-medium text-white shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                status === 'loading' 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-blue-600'
              }`}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

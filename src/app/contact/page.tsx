import { useState, FormEvent } from 'react';
import Navbar from '@/components/Navbar';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
        console.error('Error submitting form:', error);
        setStatus('error');
    }
  };

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
          {status === 'loading' && <p>Sending...</p>}
          {status === 'success' && <p className="text-green-600">Message sent successfully!</p>}
          {status === 'error' && <p className="text-red-600">There was an error sending your message.</p>}
        </form>
      </main>
    </>
  );
};

export default Contact;

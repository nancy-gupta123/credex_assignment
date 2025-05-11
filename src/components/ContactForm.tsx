'use client';

import React, { useState } from 'react';
import { useTheme } from './ToggleEffect';

const ContactForm = () => {
    const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <section className={`py-20 px-4 text-center ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          justifyItems: 'center',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <label htmlFor="name" style={{ fontSize: '1rem', marginBottom: '8px' }}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              fontSize: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <label htmlFor="email" style={{ fontSize: '1rem', marginBottom: '8px' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              fontSize: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <label htmlFor="company" style={{ fontSize: '1rem', marginBottom: '8px' }}>Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              fontSize: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <label htmlFor="licenseType" style={{ fontSize: '1rem', marginBottom: '8px' }}>License Type</label>
          <select
            id="licenseType"
            name="licenseType"
            value={formData.licenseType}

            required
            style={{
              padding: '10px',
              fontSize: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          >
            <option value="">Select License</option>
            <option value="single">Single</option>
            <option value="multi">Multi</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <label htmlFor="message" style={{ fontSize: '1rem', marginBottom: '8px' }}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            style={{
              padding: '10px',
              fontSize: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div style={{ gridColumn: 'span 2', textAlign: 'center' }}>
          <button
            type="submit"
            style={{
              padding: '12px 24px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;

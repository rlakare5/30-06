import React from 'react';
import Navbar from './Navbar';

export default function Contact() {
  return (
    <div className="contact-page">
      <Navbar />

      <section className="contact-section">
        {/* Header */}
        <div className="contact-header">
          <h2>Get in touch</h2>
          <p>
            Got questions or craving a custom blend? Drop us a line — we're here to juice up your experience.
            <br />
            Reach out and let's create something refreshing together!
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-card">
          <form className="contact-form">
            {/* Name Row */}
            <div className="row">
              <input type="text" placeholder="First name" className="input" />
              <input type="text" placeholder="Last name" className="input" />
            </div>

            {/* Email and Phone */}
            <div className="row">
              <input type="email" placeholder="Email" className="input" />
              <input type="tel" placeholder="🌐 Phone" className="input" />
            </div>

            {/* Message */}
            <textarea placeholder="Message" rows="4" className="textarea" />

            {/* Submit Button */}
            <div className="submit-container">
              <button type="submit" className="submit-btn">
                Send your message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Embedded CSS */}
      <style>{`
        .contact-page {
          background-color: #fdf1e5;
          min-height: 100vh;
          font-family: 'Quicksand', sans-serif;
          color: black;
        }

        .contact-section {
          max-width: 960px;
          margin: 0 auto;
          padding: 5rem 1rem;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .contact-header h2 {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 1rem;
        }

        .contact-header p {
          font-size: 1.125rem;
          line-height: 1.6;
          font-weight: 500;
        }

        .contact-card {
          background-color: #f0e7ba;
          border: 1px solid black;
          border-radius: 60px;
          padding: 2rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .row {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .row {
            flex-direction: row;
          }
        }

        .input {
          flex: 1;
          padding: 0.8rem 1.2rem;
          background: #fcf6d9;
          border: 1px solid black;
          border-radius: 9999px;
          font-size: 1rem;
          outline: none;
        }

        .textarea {
          width: 95%;
          padding: 1rem;
          background: #fcf6d9;
          border: 1px solid black;
          border-radius: 2rem;
          font-size: 1rem;
          resize: none;
          outline: none;
        }

        .submit-container {
          text-align: center;
        }

        .submit-btn {
          background: #fcf6d9;
          border: 1px solid black;
          color: black;
          font-weight: 600;
          padding: 0.8rem 2.5rem;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background: black;
          color: #fcf6d9;
        }
      `}</style>
    </div>
  );
}

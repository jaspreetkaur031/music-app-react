import React from 'react';
// import './home.css'; // Re-using home.css for layout

function ContactPage() {
  return (
    <main className="container main-content">
      <section className="section animate-fadeInUp" style={{ paddingTop: '2rem' }}>
        <div className="section-header">
          <h2>Contact Us</h2>
        </div>
        
        <div className="glass-card glowing-border" style={{ padding: '2rem' }}>
          <p style={{ color: 'var(--text-color)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Have a question, suggestion, or just want to say hi? We'd love to hear from you!
          </p>
          
          <form action="#" className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>
            <button type="submit" className="nav-button" style={{ width: '100%' }}>Send Message</button>
          </form>
        </div>
      </section>

      {/* Simple CSS-in-JS for the form elements */}
      <style>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-weight: 500;
          color: var(--text-dark);
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--glass-border);
          background: rgba(0, 0, 0, 0.2);
          color: var(--primary-color);
          font-family: var(--font-sans);
          font-size: 1rem;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-blue);
          box-shadow: 0 0 10px rgba(14, 165, 233, 0.3);
        }
      `}</style>
    </main>
  );
}

export default ContactPage;

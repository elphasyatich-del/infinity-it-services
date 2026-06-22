import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // In production, wire this up to an email service or backend
    setSent(true);
  }

  return (
    <main>
      <section className="page-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out anytime.</p>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>📍 Nairobi, Kenya</p>
          <p>📞 <a href="tel:+254797264200">+254 797 264 200</a></p>
          <p>✉️ <a href="mailto:info@elphasit.com">info@elphasit.com</a></p>
          <p>
            💬{" "}
            <a href="https://wa.me/254797264200" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {sent ? (
            <p className="success-msg">
              ✅ Message sent! We'll get back to you shortly.
            </p>
          ) : (
            <>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </>
          )}
        </form>
      </section>
    </main>
  );
}

export default Contact;

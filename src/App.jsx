import "./App.css";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import reeferBg from "./assets/1082975041679679606.jpg";
import codingImg from "./assets/The curved desk configuration is an ergonomic and….jpg";

const services = [
  { icon: "🌐", title: "Web Development", desc: "Custom websites and web apps built with modern technologies." },
  { icon: "🖥️", title: "IT Support", desc: "Hardware, software, and network support for your business." },
  { icon: "☁️", title: "Cloud Solutions", desc: "Scalable cloud infrastructure and migration services." },
  { icon: "🔐", title: "Cybersecurity", desc: "Protect your data and systems from modern threats." },
  { icon: "📱", title: "Mobile Apps", desc: "Cross-platform mobile applications for iOS and Android." },
  { icon: "📊", title: "Data Analytics", desc: "Turn your data into actionable business insights." },
];

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name} <${form.email}>`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&to=info@elphasit.com&su=${subject}&body=${body}`,
      "_blank"
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Your Message" rows={5} value={form.message} onChange={handleChange} required />
      <button type="submit" className="btn-primary">Send Message</button>
    </form>
  );
}

function App() {
  return (
    <>
      {/* ── Navbar ── */}
      <nav className="navbar">
        <h2 className="brand">Elphas IT Services</h2>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ── Hero ── */}
      <section
        id="home"
        className="hero"
        style={{
          backgroundImage: `url(${reeferBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-text">
          <h1>Elphas IT Services</h1>
          <p>Your trusted partner for web development and IT solutions.</p>
          <a href="#contact" className="btn-primary">Get Started</a>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="features">
        <div className="feature-card">
          <h3>⚡ Fast Delivery</h3>
          <p>We build and ship solutions quickly without compromising quality.</p>
        </div>
        <div className="feature-card">
          <h3>🔒 Secure Systems</h3>
          <p>Security-first approach on every project we handle.</p>
        </div>
        <div className="feature-card">
          <h3>📞 24/7 Support</h3>
          <p>We're always available to keep your systems running smoothly.</p>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services">
        <div className="page-hero">
          <h1>Our Services</h1>
          <p>Everything your business needs to thrive in the digital age.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section id="about">
        <div className="page-hero">
          <h1>About Us</h1>
          <p>We are passionate about technology and helping businesses grow.
            ## About Us

Welcome to **Infinity IT Services**, your trusted partner in delivering innovative, reliable, and cutting-edge technology solutions. We are a dynamic IT company dedicated to helping businesses, organizations, and individuals harness the power of technology to achieve their goals and thrive in the digital age.

At Infinity IT Services, we believe that technology should simplify life, enhance productivity, and create endless opportunities. Our team is passionate about providing high-quality solutions tailored to meet the unique needs of our clients. Whether you are a startup, a growing business, or an established organization, we are committed to delivering services that drive success and long-term growth.

We specialize in a wide range of services, including website development, software development, computer repair and maintenance, networking solutions, cybersecurity services, cloud technologies, and IT consulting. Our expertise enables us to design and implement solutions that are secure, scalable, efficient, and aligned with the latest industry standards.

Customer satisfaction is at the heart of everything we do. We take pride in building strong relationships with our clients by offering professional support, transparent communication, and dependable services. Our mission is to provide affordable and innovative technology solutions that empower businesses and individuals to succeed in an increasingly connected world.

Driven by excellence, integrity, and innovation, Infinity IT Services continuously adapts to emerging technologies and industry trends to ensure that our clients receive the best possible solutions. We strive to be more than just an IT service provider—we aim to be a trusted technology partner that helps transform ideas into reality.

Our vision is to become a leading provider of digital and information technology solutions, recognized for our commitment to quality, innovation, and exceptional customer service. Through continuous improvement and a passion for technology, we aspire to create lasting value for our clients and contribute to a smarter, more connected future.

At Infinity IT Services, we are committed to delivering excellence, building trust, and providing limitless possibilities through technology. Together, let's innovate, connect, and shape the future.

          </p>
        </div>
        <div className="about-content">
          {/* Left — coding image */}
          <div className="about-image">
            <img
              src={codingImg}
              alt="Coding"
            />
          </div>

          {/* Right — text + stats */}
          <div className="about-right">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                Elphas IT Services is a Nairobi-based technology company delivering
                reliable and affordable IT solutions to businesses of all sizes.
                From startups to established enterprises, we bring the same level
                of dedication and expertise to every engagement.
              </p>
              <h2>Our Mission</h2>
              <p>
                To empower businesses through innovative technology solutions that
                drive growth, efficiency, and digital transformation.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat"><h3>50+</h3><p>Projects Delivered</p></div>
              <div className="stat"><h3>30+</h3><p>Happy Clients</p></div>
              <div className="stat"><h3>5+</h3><p>Years Experience</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact">
        <div className="page-hero">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Reach out anytime.</p>
        </div>
        <div className="contact-section">
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
          <ContactForm />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <p>© 2026 Elphas IT Services. All Rights Reserved.</p>
      </footer>

      {/* ── WhatsApp Float ── */}
      <a
        href="https://wa.me/254797264200"
        className="whatsapp-btn"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default App;

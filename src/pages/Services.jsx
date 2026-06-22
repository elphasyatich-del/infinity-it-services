const services = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Custom websites and web apps built with modern technologies.",
  },
  {
    icon: "🖥️",
    title: "IT Support",
    desc: "Hardware, software, and network support for your business.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure and migration services.",
  },
  {
    icon: "🔐",
    title: "Cybersecurity",
    desc: "Protect your data and systems from modern threats.",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: "📊",
    title: "Data Analytics",
    desc: "Turn your data into actionable business insights.",
  },
];

function Services() {
  return (
    <main>
      <section className="page-hero">
        <h1>Our Services</h1>
        <p>Everything your business needs to thrive in the digital age.</p>
      </section>

      <section className="services-grid">
        {services.map((s) => (
          <div className="service-card" key={s.title}>
            <span className="service-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Services;

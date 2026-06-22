import reeferBg from "../assets/1082975041679679606.jpg";

function Home() {
  return (
    <main>
      {/* Hero */}
      <section
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
          <a href="/contact" className="btn-primary">Get Started</a>
        </div>
      </section>

      {/* Features */}
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
    </main>
  );
}

export default Home;

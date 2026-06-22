function About() {
  return (
    <main>
      <section className="page-hero">
        <h1>About Us</h1>
        <p>We are passionate about technology and helping businesses grow.</p>
      </section>

      <section className="about-content">
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
          <div className="stat">
            <h3>50+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat">
            <h3>30+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;

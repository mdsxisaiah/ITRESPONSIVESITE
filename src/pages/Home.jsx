export default function Home() {
  return (
    <section className="page home">
      <h1>Information Technology Department</h1>

      <p className="mission">
        Our mission is to prepare students for successful careers in software
        development, cybersecurity, networking, and cloud technologies through
        hands-on learning and real-world experience.
      </p>

      <div className="home-grid">
        <div className="info-card">
          <h2>Featured Programs</h2>
          <ul>
            <li>Cybersecurity & Digital Defense</li>
            <li>Software & Web Development</li>
            <li>Networking and Cloud Administration</li>
          </ul>
        </div>

        <div className="info-card">
          <h2>Why Choose Us?</h2>
          <p>
            Our department offers small class sizes, experienced faculty, 
            up to date labs/resources, and strong industry partnerships that help 
            students gain valuable experience.
          </p>
        </div>
      </div>

      <div className="cta-area">
        <a className="btn-primary" href="/programs">View Programs</a>
        <p> </p>
        <a className="btn-secondary" href="/contact">Request Information</a>
      </div>

      <div className="contact-highlight">
        <h3>Contact Us</h3>
        <p>Email: itdepartment@ElijahTech.edu</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </section>
  );
}

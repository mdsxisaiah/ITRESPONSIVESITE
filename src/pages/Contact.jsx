export default function Contact() {
  return (
    <section className="page contact">
      <h1>Contact Us</h1>

      <p>If you have questions about programs or admissions, contact us below.</p>

      <div className="contact-info">
        <p><strong>Email:</strong> itdepartment@ElijahTech.edu</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Address:</strong> 123 College Road, Tech Building "Elijah Tech"</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <p></p>
        <input type="email" placeholder="Email Address" required />
        <p></p>
        <textarea placeholder="Your Message"></textarea>
        <p></p>
        <button className="btn-primary" type="submit">Send Message</button>
      </form>
    </section>
  );
}

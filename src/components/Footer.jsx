import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Elijah Tech Information Technology Department</p>
      <p className="footer-note">
        Preparing students for careers in technology.
      </p>
    </footer>
  );
}

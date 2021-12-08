import '../styles/Footer.css';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="">
      Martín Lupa {year}
      <div className="footer-icons-container">
        <a href="https://www.linkedin.com/in/martin-lupa/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.github.com/MartinLupa">
          <i className="fab fa-github"> </i>
        </a>
      </div>
    </footer>
  );
}

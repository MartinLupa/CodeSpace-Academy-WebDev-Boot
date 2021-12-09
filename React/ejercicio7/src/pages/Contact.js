import '../styles/Contact.css';
import image1 from '../images/MartinL1.JPG';

export default function Contact() {
  return (
    <div className="contact-container">
      <img className="image" src={image1} alt="" />
      <div className="text-container">
        <h4>I´m Martín</h4>
        <p>
          A smile? Always, unless we are out of coffee 😄 I had been working in
          Accounting and Auditing, but I have recently decided to make a career
          change and take a new step in my professional career. I am currently
          living in and in love with Málaga, where I am studying a Full Stack
          Web Development Bootcamp (Dec 2021).
        </p>
        <h4>Project log:</h4>
        <p>Movie App with watch list and search functionality</p>
        <ul>
          <li>React based responsive SPA.</li>
          <li>Bootstrap</li>
          <li>
            Hooks: useState, useEffect, useContext, custom hook (useFetch)
          </li>
          <li>
            Use of a global context to keep states while navigating between
            pages (I don´t use any database here)
          </li>
          <li>
            Router: conditional rendering of components with useLocation (Delete
            button only rendered on watch list page | Add to playlist button
            only rendered on main page)
          </li>
          <li>.env file to store keys</li>
        </ul>
      </div>
    </div>
  );
}

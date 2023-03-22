import { Link } from "react-router-dom";
import logo from '../assets/IMG/Logo.png'

export default function Header() {
  return (
    <header>

<img src={logo} className="logo" alt="logo" />
      <h3 className="company-name">OMER YUSUF</h3>
      <nav>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/expenses">Projects</Link></li>
          <li><Link to="/invoices">About Me</Link></li>
          <li><Link to="/ContactMe">Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
}


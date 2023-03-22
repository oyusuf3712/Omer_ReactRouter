import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <p>&copy; {(new Date().getFullYear())} <Link to="/">O.Y Designs</Link></p>
    </footer>
  );
}
import contactimg from '../assets/IMG/contact.JPG'
export default function ContactMe() {
    return (
      <main>
        <h2>Contact Me 👋🏽</h2>  

        <div className="container contact">
          <h4>Omer Yusuf</h4>
          <ul>
            <li>Toronto, Ontario, M1E2M9</li>
            <li>Phone: 4377785603</li>
            <li>oyusuf37@hotmail.com</li>
          </ul>
          <img src={contactimg} className="contactImg" alt="img" />
          </div>
      </main>
    );
  }
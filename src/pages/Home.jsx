import Banner from '../assets/IMG/Pyramids.jpg'
export default function Home() {
  return (
    <main>
      
      <div className="home-content">
      <h6>Im An Interactive Media Design</h6>
        <p>
          Welcome to my Site!
        </p>
        <img src={Banner} className="banner" alt="frontBanner" /> 
      </div>

    </main>
  );
}
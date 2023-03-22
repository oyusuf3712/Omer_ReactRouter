import project2 from '../assets/IMG/Movingposter.MP4';
import project3 from '../assets/IMG/Mockups.jpg';
import project4 from '../assets/IMG/Photo.jpeg';
import project5 from '../assets/IMG/PhotoNight.jpeg';

export default function Expenses() {
  return (
    <main>
      <h2>MY WORK</h2>

      <div className="content">
        <p>Here Is A Collection Of My Design and Photography Work !</p> 
      </div>

      <div className="container project-container">
            <ul>
                <li>"THE NATIONAL" Poster Redesign</li>
                <li> <img src={project2} className="" alt="Project" />  </li>
                <li>The Sandwich Shop App</li>
                <li> <img src={project3} className="" alt="Project" />  </li>
                <li>"Sultan Hassan" Mosque in Egypt </li>
                <li> <img src={project4} className="" alt=" Project" />  </li>
                <li>Sultan Hassan" Mosque AT NIGHT</li>
                <li> <img src={project5} className="" alt="Project" />  </li>
            </ul>
        </div>

    </main>
  );
}
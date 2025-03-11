import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Venu Goud</h1>
        <p>IT Professional | Full-Stack Developer</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>I'm a passionate developer with experience in building scalable applications.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>A brief description of the project.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>A brief description of the project.</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: nvgoud2001@gmail.com</p>
      </section>
    </div>
  );
}

export default App;

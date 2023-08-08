import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <Skills />
    </div>
  );
}

function Avatar() {
  return <img src="spinaci.jpg" alt="Adam foto" />;
}

function Intro() {
  return (
    <div>
      <h3>Guebre Pooya Adama</h3>
      <p>
        Full Stack web developer and teacher at Udemy. When I'm not coding or
        preparing a course, I like to play board, games, to cook(and eat), or to
        just enjoy the portuguese sun at the beach
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <span className="html">HTML+CSS</span>
      <span className="javascript">Javascript</span>
      <span className="react">React</span>
      <span className="svelte">Svelte</span>
      <span className="webdesign">Webdesign</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

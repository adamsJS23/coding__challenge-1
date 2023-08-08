import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <div className="skills">
          <Skill bgColor="cornflowerblue" skill="HTML+CSS" emoji="🪔" />
          <Skill bgColor="gold" skill="Javascript" emoji="🏄‍♂️" />
          <Skill bgColor="yellowgreen" skill="React" emoji="🫰" />
          <Skill bgColor="orangered" skill="Svelte" emoji="💊" />
          <Skill bgColor="burlywood" skill="Webdesign" emoji="✒️" />
          <Skill bgColor="rosybrown" skill="Git and GitHub" emoji="⚒️" />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="spinaci.jpg" alt="Adam foto" />;
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

function Skill(props) {
  console.log(props);
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

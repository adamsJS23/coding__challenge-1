import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

// const levels = { beginner: "👼", intermediate: "👍", advanced: "💪" };

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <div className="skills">
          {skills.map((skill) => {
            return (
              <Skill
                skill={skill.skill}
                color={skill.color}
                level={skill.level}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="jonas.jpeg" alt="Adam foto" />;
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

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      {/* <span>{levels[skillObj.level]}</span> */}
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "👼"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

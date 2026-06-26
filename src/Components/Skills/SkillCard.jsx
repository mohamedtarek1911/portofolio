import React from "react";

export default function SkillCard({ title, skills }) {
  return (
    <div className="skills__column">
      <h3 className="skills__title">{title}</h3>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li key={skill} className="skills__data">
            <i className="bx bx-badge-check"></i>
            <span className="skills__name">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

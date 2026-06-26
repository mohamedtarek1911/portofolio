import React from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";

const skillGroups = [
  {
    title: "Frameworks & Languages",
    skills: [
      "Vue 3",
      "Nuxt",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SASS",
    ],
  },
  {
    title: "State & UI Libraries",
    skills: [
      "Pinia",
      "Vuex",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "Vuetify",
      "PrimeVue",
      "shadcn/ui",
      "Radix UI",
      "Bootstrap",
    ],
  },
  {
    title: "Tools & Quality",
    skills: [
      "Firebase",
      "WebSockets / SSE",
      "REST APIs",
      "ESLint",
      "Prettier",
      "Turborepo",
      "Vite",
      "Git",
      "Jira",
      "WCAG",
      "i18n / RTL",
    ],
  },
];

export default function Skills() {
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical toolkit</span>
        <div className="skills__container container">
          <div className="skills__panel grid">
            {skillGroups.map((group) => (
              <SkillCard
                key={group.title}
                title={group.title}
                skills={group.skills}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

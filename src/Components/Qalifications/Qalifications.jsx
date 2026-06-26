import React, { useState } from "react";
import "./Qalifications.css";

const educationData = [
  {
    title: "BSc Civil Engineering",
    subtitle: "Pyramids Higher Institute · Grade B+ (Very Good)",
    date: "2014 – 2019",
  },
  {
    title: "Frontend Diploma",
    subtitle: "Route Academy",
    date: "2022",
  },
  {
    title: "React – The Complete Guide",
    subtitle: "Maximilian Schwarzmüller · Udemy",
    date: "2022",
  },
  {
    title: "The Complete JavaScript Course",
    subtitle: "Jonas Schmedtmann · Udemy",
    date: "2021",
  },
  {
    title: "Build Responsive Real-World Websites with HTML and CSS",
    subtitle: "Jonas Schmedtmann · Udemy",
    date: "2021",
  },
];

const experienceData = [
  {
    title: "Frontend Developer",
    subtitle: "Wakeb Data",
    description:
      "Vue 3, TypeScript, Vuetify, WebSockets · 13+ production apps across legal, recruitment, and surveillance domains with live video, LPR, maps, and Arabic RTL dashboards.",
    date: "Jan 2026 – Present",
  },
  {
    title: "Frontend Developer",
    subtitle: "Dafa Company (Rox – Crypto Trading Platform)",
    description:
      "Vue 3, PrimeVue, Firebase · Multi-wallet crypto trading, vault payments, SSE/FCM real-time metrics, and 30% platform responsiveness improvement.",
    date: "Jun 2024 – Jan 2026",
  },
  {
    title: "Frontend Developer (Freelance)",
    subtitle: "Mesbaar – Candidate Assessment Platform",
    description:
      "React, TypeScript, Zustand, Turborepo · 165+ evaluation questions, real-time session management, JWT auth, and English/Arabic RTL support.",
    date: "Aug 2025 – Sep 2025",
  },
  {
    title: "Frontend Developer (Freelance)",
    subtitle: "Prosoft",
    description:
      "Next.js 15, Tailwind CSS, shadcn/ui, GSAP, Framer Motion · Marketing website with motion-driven UI.",
    date: "Apr 2025 – Jun 2025",
  },
  {
    title: "Frontend Developer",
    subtitle: "Uniparticle",
    description:
      "Vue 2/3, Nuxt 3 · Discovery Education OPD platform, WCAG accessibility, i18n, and Seven.eg website.",
    date: "Jun 2023 – Jun 2024",
  },
];

function TimelineItem({ item, index, isLast }) {
  const content = (
    <>
      <h3 className="qali__title">{item.title}</h3>
      <span className="qali__subtitle">{item.subtitle}</span>
      {item.description && (
        <p className="qali__description">{item.description}</p>
      )}
      <div className="qali__calender">
        <i className="uil uil-calendar-alt"></i> {item.date}
      </div>
    </>
  );

  const timeline = (
    <div>
      <span className="qali__rounder"></span>
      {!isLast && <span className="qali__line"></span>}
    </div>
  );

  return (
    <div className="qali__data">
      {index % 2 === 0 ? (
        <>
          <div></div>
          {timeline}
          <div>{content}</div>
        </>
      ) : (
        <>
          <div>{content}</div>
          {timeline}
          <div></div>
        </>
      )}
    </div>
  );
}

export default function Qalifications() {
  const [toggleState, setToggleState] = useState(2);

  return (
    <>
      <section id="quali" className="qali section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
        <div className="qali__container container grid">
          <div className="qali__tabs">
            <div
              className={
                toggleState === 2
                  ? "qali__button qali__active button--flex"
                  : "qali__button button--flex"
              }
              onClick={() => setToggleState(2)}
            >
              <i className="uil uil-briefcase-alt qali__icon"></i>
              Experience
            </div>
            <div
              className={
                toggleState === 1
                  ? "qali__button qali__active button--flex"
                  : "qali__button button--flex"
              }
              onClick={() => setToggleState(1)}
            >
              <i className="uil uil-graduation-cap qali__icon"></i>
              Education
            </div>
          </div>
          <div className="qali__sections">
            <div
              className={
                toggleState === 1
                  ? "qali__content qali__content-active"
                  : "qali__content"
              }
            >
              {educationData.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  item={item}
                  index={index}
                  isLast={index === educationData.length - 1}
                />
              ))}
            </div>
            <div
              className={
                toggleState === 2
                  ? "qali__content qali__content-active"
                  : "qali__content"
              }
            >
              {experienceData.map((item, index) => (
                <TimelineItem
                  key={`${item.subtitle}-${item.date}`}
                  item={item}
                  index={index}
                  isLast={index === experienceData.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

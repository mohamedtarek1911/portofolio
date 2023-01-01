import React from "react";

export default function Info() {
  return (
    <>
      <div className="about__info grid">
        <div className="about__box">
          <i class="bx bx-award about__icon"></i>
          <h3 className="about__title">+10</h3>
          <span className="about__subtitle">Projects</span>
        </div>
        <div className="about__box">
          <i class="bx bx-briefcase-alt about__icon"></i>
          <h3 className="about__title">+25</h3>
          <span className="about__subtitle">Small Projects</span>
        </div>
        <div className="about__box">
          <i class="bx bxl-meta about__icon"></i>
          <h3 className="about__title">+8</h3>
          <span className="about__subtitle">Technical Skills</span>
        </div>
      </div>
    </>
  );
}

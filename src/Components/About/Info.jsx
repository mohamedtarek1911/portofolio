import React from "react";

export default function Info() {
  return (
    <>
      <div className="about__info grid">
        <div className="about__box">
          <i className="bx bx-briefcase-alt about__icon"></i>
          <h3 className="about__title">3+</h3>
          <span className="about__subtitle">
            Years of <br /> Experience
          </span>
        </div>
        <div className="about__box">
          <i className="bx bx-layer about__icon"></i>
          <h3 className="about__title">18+</h3>
          <span className="about__subtitle">
            Production <br /> Apps
          </span>
        </div>
        <div className="about__box">
          <i className="bx bx-code-alt about__icon"></i>
          <h3 className="about__title">15+</h3>
          <span className="about__subtitle">
            Technologies <br /> Mastered
          </span>
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function Frontend() {
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Frontend developer</h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Bootstrap</h3>
                {/* <span className="skills__level">Intermediate</span> */}
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">SASS</h3>
                {/* <span className="skills__level">Intermediate</span> */}
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">ECMAScript</h3>
                {/* <span className="skills__level">Advanced</span> */}
              </div>
            </div>
          </div>
          <div className="skills__group">
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">JQuery</h3>
                {/* <span className="skills__level">Intermediate</span> */}
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Git & GitHub</h3>
                {/* <span className="skills__level">Intermediate</span> */}
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">SQL</h3>
                {/* <span className="skills__level">beginner</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

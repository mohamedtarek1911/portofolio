import React, { useState } from "react";
import "./Qalifications.css";

export default function Qalifications() {
  const [ToggleState, setToggleState] = useState(0);
  const ToggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <section id="quali" className="qali section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal joureny</span>
        <div className="qali__container container grid">
          <div className="qali__tabs">
            <div
              className={
                ToggleState === 1
                  ? "qali__button qali__active button--flex"
                  : "qali__button  button--flex"
              }
              onClick={() => ToggleTab(1)}
            >
              <i class="uil uil-graduation-cap qali__icon"></i>Education
            </div>
            <div
              className={
                ToggleState === 2
                  ? "qali__button qali__active button--flex"
                  : "qali__button  button--flex"
              }
              onClick={() => ToggleTab(2)}
            >
              <i class="uil uil-briefcase-alt qali__icon"></i>Experience
            </div>
          </div>
          <div className="qali__sections">
            <div
              className={
                ToggleState === 1
                  ? "qali__content qali__content-active"
                  : "qali__content"
              }
            >
              <div className="qali__data">
                <div>
                  <h3 className="qali__title">Web Designer</h3>
                  <span className="qali__subtitle">spain Institute</span>
                  <div className="qali__calender">
                    <i class="uil uil-calendar-alt"></i>2021-present
                  </div>
                </div>
                <div>
                  <span className="qali__rounder"></span>
                  <span className="qali__line"></span>
                </div>
              </div>
              <div className="qali__data">
                <div></div>
                <div>
                  <span className="qali__rounder"></span>
                  <span className="qali__line"></span>
                </div>
                <div>
                  <h3 className="qali__title">Art Director</h3>
                  <span className="qali__subtitle">spain Institute</span>
                  <div className="qali__calender">
                    <i class="uil uil-calendar-alt"></i>2021-present
                  </div>
                </div>
              </div>
              <div className="qali__data">
                <div>
                  <h3 className="qali__title">Web Development</h3>
                  <span className="qali__subtitle">spain Institute</span>
                  <div className="qali__calender">
                    <i class="uil uil-calendar-alt"></i>2021-present
                  </div>
                </div>
                <div>
                  <span className="qali__rounder"></span>
                  <span className="qali__line"></span>
                </div>
              </div>
              <div className="qali__data">
                <div></div>
                <div>
                  <span className="qali__rounder"></span>
                  <span className="qali__line"></span>
                </div>
                <div>
                  <h3 className="qali__title">UI/UX Expert</h3>
                  <span className="qali__subtitle">spain Institute</span>
                  <div className="qali__calender">
                    <i class="uil uil-calendar-alt"></i>2021-present
                  </div>
                </div>
                <div></div>
                <div>
                  <span className="qali__rounder"></span>
                  {/* <span className="qali__line"></span> */}
                </div>
              </div>
            </div>
            <div
              className={
                ToggleState === 2
                  ? "qali__content qali__content-active"
                  : "qali__content"
              }
            >
              <div className="qali__data">
                <div>
                  <h3 className="qali__title">Web Designer2</h3>
                  <span className="qali__subtitle">spain Institute</span>
                  <div className="qali__calender">
                    <i class="uil uil-calendar-alt"></i>2021-present
                  </div>
                </div>
                <div>
                  <span className="qali__rounder"></span>
                  <span className="qali__line"></span>
                </div>
              </div>
              <div className="qali__data">
                <div></div>
                <div>
                  <span className="qali__rounder"></span>
                  <span className="qali__line"></span>
                </div>
                <div>
                  <h3 className="qali__title">Art Director2</h3>
                  <span className="qali__subtitle">spain Institute</span>
                  <div className="qali__calender">
                    <i class="uil uil-calendar-alt"></i>2021-present
                  </div>
                </div>
              </div>
              <div className="qali__data">
                <div>
                  <h3 className="qali__title">Web Development2</h3>
                  <span className="qali__subtitle">spain Institute</span>
                  <div className="qali__calender">
                    <i class="uil uil-calendar-alt"></i>2021-present
                  </div>
                </div>
                <div>
                  <span className="qali__rounder"></span>
                  <span className="qali__line"></span>
                </div>
              </div>
              <div className="qali__data">
                <div></div>
                <div>
                  <span className="qali__rounder"></span>
                  <span className="qali__line"></span>
                </div>
                <div>
                  <h3 className="qali__title">UI/UX Expert2</h3>
                  <span className="qali__subtitle">spain Institute</span>
                  <div className="qali__calender">
                    <i class="uil uil-calendar-alt"></i>2021-present
                  </div>
                </div>
                <div></div>
                <div>
                  <span className="qali__rounder"></span>
                  {/* <span className="qali__line"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

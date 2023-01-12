import React, { useState } from "react";
import "./Qalifications.css";

export default function Qalifications() {
  const [ToggleState, setToggleState] = useState(1);
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
              <i class="uil uil-briefcase-alt qali__icon"></i>Projects
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
                <div></div>
                <div>
                  <span className="qali__rounder"></span>
                  <span className="qali__line"></span>
                </div>
                <div>
                  <h3 className="qali__title">Frontend Diploma</h3>
                  <span className="qali__subtitle">Route Academy</span>
                  <div className="qali__calender">
                    <i class="uil uil-calendar-alt"></i> 2022
                  </div>
                </div>
              </div>
              <div className="qali__data">
                <div>
                  <h3 className="qali__title">React - The Complete Guide</h3>
                  <span className="qali__subtitle">
                    (Maximilian Schwarzmüller) Udemy Courses
                  </span>
                  <div className="qali__calender">
                    <i class="uil uil-calendar-alt"></i> 2022
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
                  <h3 className="qali__title">
                    The Complete JavaScript Course
                  </h3>
                  <span className="qali__subtitle">
                    (Jonas Schmedtmann) Udemy Courses
                  </span>
                  <div className="qali__calender">
                    <i class="uil uil-calendar-alt"></i> 2021
                  </div>
                </div>
              </div>
              <div className="qali__data">
                <div>
                  <h3 className="qali__title">
                    Build Responsive Real-World Websites with HTML and CSS
                  </h3>
                  <span className="qali__subtitle">
                    (Jonas Schmedtmann) Udemy Courses
                  </span>
                  <div className="qali__calender">
                    <i class="uil uil-calendar-alt"></i> 2021
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
                  <h3 className="qali__title">Faculty of engineering</h3>
                  <span className="qali__subtitle">Pyramids Institute</span>
                  <div className="qali__calender">
                    <i class="uil uil-calendar-alt"></i> 2014-2019
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
                  <h3 className="qali__title">Shopping Hub</h3>
                  <span className="qali__subtitle">shopping cart</span>
                  <div className="qali__calender">
                    {/* <i class="uil uil-calendar-alt"></i>2021-present */}
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
                  <h3 className="qali__title">Notes</h3>
                  <span className="qali__subtitle">CRUDS site</span>
                  <div className="qali__calender">
                    {/* <i class="uil uil-calendar-alt"></i>2021-present */}
                  </div>
                </div>
              </div>
              <div className="qali__data">
                <div>
                  <h3 className="qali__title">Noxes</h3>
                  <span className="qali__subtitle">Movies site</span>
                  <div className="qali__calender">
                    {/* <i class="uil uil-calendar-alt"></i>2021-present */}
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
                  <h3 className="qali__title">Weather</h3>
                  <span className="qali__subtitle">Weather site</span>
                  <div className="qali__calender">
                    {/* <i class="uil uil-calendar-alt"></i>2021-present */}
                  </div>
                </div>
              </div>
              <div className="qali__data">
                <div>
                  <h3 className="qali__title">Mapty</h3>
                  <span className="qali__subtitle">
                    Walking and Cycling site
                  </span>
                  <div className="qali__calender">
                    {/* <i class="uil uil-calendar-alt"></i>2021-present */}
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
                  <h3 className="qali__title">Guess My Number</h3>
                  <span className="qali__subtitle">Game site</span>
                  <div className="qali__calender">
                    {/* <i class="uil uil-calendar-alt"></i>2021-present */}
                  </div>
                </div>
              </div>
              <div className="qali__data">
                <div>
                  <h3 className="qali__title">Natours</h3>
                  <span className="qali__subtitle">Trips site</span>
                  <div className="qali__calender">
                    {/* <i class="uil uil-calendar-alt"></i>2021-present */}
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
                  <h3 className="qali__title">Omnifood</h3>
                  <span className="qali__subtitle">Food site</span>
                  <div className="qali__calender">
                    {/* <i class="uil uil-calendar-alt"></i>2021-present */}
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

import React, { useState } from "react";
import "./Header.css";
function Header() {
  const [Toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // console.log(scrollup);
    if (this.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });
  let showMenu = () => {
    if (!Toggle) {
      setToggle(true);
    } else {
      setToggle(true);
    }
  };

  let hideMenu = () => {
    if (Toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            Mohamed
          </a>
          <div className={Toggle ? "nav__menu show__menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a
                  href="#home"
                  onClick={() => {
                    setActiveNav("#home");
                  }}
                  className={
                    activeNav === "#home"
                      ? "nav__link nav__active"
                      : "nav__link "
                  }
                >
                  <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  onClick={() => {
                    setActiveNav("#about");
                  }}
                  className={
                    activeNav === "#about"
                      ? "nav__link nav__active"
                      : "nav__link "
                  }
                >
                  <i className="uil uil-user nav__icon"></i>About
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skills"
                  onClick={() => {
                    setActiveNav("#skills");
                  }}
                  className={
                    activeNav === "#skills"
                      ? "nav__link nav__active"
                      : "nav__link "
                  }
                >
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#quali"
                  onClick={() => {
                    setActiveNav("#quali");
                  }}
                  className={
                    activeNav === "#quali"
                      ? "nav__link nav__active"
                      : "nav__link "
                  }
                >
                  <i className="uil uil-briefcase-alt nav__icon"></i>
                  Qualifications
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#portfolio"
                  onClick={() => {
                    setActiveNav("#portfolio");
                  }}
                  className={
                    activeNav === "#portfolio"
                      ? "nav__link nav__active"
                      : "nav__link "
                  }
                >
                  <i className="uil uil-scenery nav__icon"></i>Portofolio
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  onClick={() => {
                    setActiveNav("#contact");
                  }}
                  className={
                    activeNav === "#contact"
                      ? "nav__link nav__active"
                      : "nav__link "
                  }
                >
                  <i className="uil uil-message nav__icon"></i>Contact
                </a>
              </li>
            </ul>
            <i onClick={hideMenu} class="uil uil-times nav__close"></i>
          </div>
          <div onClick={showMenu} className="nav__toggle">
            <i class="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

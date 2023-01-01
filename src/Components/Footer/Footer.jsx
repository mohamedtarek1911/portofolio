import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <h1 className="footer__title">Mohamed Tarek</h1>
          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portofolio
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>
          </ul>
          <div className="footer__social">
            <a
              href="https://www.instagram.com/"
              target={"_blank"}
              className="footer__social-link"
            >
              <i class="uil uil-instagram"></i>
            </a>
            <a
              href="https://github.com/mohamedtarek1911"
              target={"_blank"}
              className="footer__social-link"
            >
              <i class="uil uil-github-alt"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-tarek-246084250/"
              target={"_blank"}
              className="footer__social-link"
            >
              <i class="uil uil-linkedin-alt"></i>
            </a>
          </div>
          <span className="footer__copy">
            &#169; Mohamed Tarek. All rigths reserved
          </span>
        </div>
      </footer>
    </>
  );
}

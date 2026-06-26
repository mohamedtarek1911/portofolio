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
                Portfolio
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
              href="https://github.com/mohamedtarek1911"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
              aria-label="GitHub"
            >
              <i className="uil uil-github-alt"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-tarek-246084250/"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
              href="mailto:mohamedtarek7670@gmail.com"
              className="footer__social-link"
              aria-label="Email"
            >
              <i className="uil uil-envelope"></i>
            </a>
          </div>
          <span className="footer__copy">
            &#169; {new Date().getFullYear()} Mohamed Tarek. All rights reserved
          </span>
        </div>
      </footer>
    </>
  );
}

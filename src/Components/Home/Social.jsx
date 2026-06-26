import React from "react";

export default function Social() {
  return (
    <>
      <div className="home__social">
        <a
          href="https://github.com/mohamedtarek1911"
          target="_blank"
          rel="noreferrer"
          className="home__social-icon"
          aria-label="GitHub"
        >
          <i className="uil uil-github-alt"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-tarek-246084250/"
          target="_blank"
          rel="noreferrer"
          className="home__social-icon"
          aria-label="LinkedIn"
        >
          <i className="uil uil-linkedin-alt"></i>
        </a>
        <a
          href="mailto:mohamedtarek7670@gmail.com"
          className="home__social-icon"
          aria-label="Email"
        >
          <i className="uil uil-envelope"></i>
        </a>
      </div>
    </>
  );
}

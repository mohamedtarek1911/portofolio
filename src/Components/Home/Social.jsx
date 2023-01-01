import React from "react";

export default function Social() {
  return (
    <>
      <div className="home__social">
        <a
          href="https://www.instagram.com/"
          target={"_blank"}
          className="home__social-icon"
        >
          <i class="uil uil-instagram"></i>
        </a>
        <a
          href="https://github.com/mohamedtarek1911"
          target={"_blank"}
          className="home__social-icon"
        >
          <i class="uil uil-github-alt"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-tarek-246084250/"
          target={"_blank"}
          className="home__social-icon"
        >
          <i class="uil uil-linkedin-alt"></i>
        </a>
      </div>
    </>
  );
}

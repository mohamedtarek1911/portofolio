import React from "react";

export default function WorkItem({ item }) {
  const { image, title, category, description, demo, repo } = item;

  return (
    <div className="work__card">
      <img className="work__img" src={image} alt={title} />
      <span className="work__category">{category}</span>
      <h3 className="work__title">{title}</h3>
      {description && <p className="work__description">{description}</p>}
      <div className="work__actions">
        {demo && (
          <a
            target="_blank"
            rel="noreferrer"
            href={demo}
            className="work__button"
          >
            Live Site <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        )}
        {repo && (
          <a
            target="_blank"
            rel="noreferrer"
            href={repo}
            className="work__button"
          >
            Repo <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        )}
      </div>
    </div>
  );
}

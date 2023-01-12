import React from "react";

export default function WorkItem(props) {
  let { image, title, demo, repo } = props.item;
  return (
    <>
      <div className="work__card">
        <img className="work__img" src={image} alt="" />
        <h3 className="work__title">{title}</h3>
        <a target={"_blank"} href={demo} className="work__button">
          Demo <i class="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a target={"_blank"} href={repo} className="work__button">
          Repo <i class="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </>
  );
}

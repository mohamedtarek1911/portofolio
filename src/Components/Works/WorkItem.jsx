import React from "react";

export default function WorkItem(props) {
  let { image, title } = props.item;
  return (
    <>
      <div className="work__card">
        <img src={image} alt="" />
        <h3 className="work__title">{title}</h3>
        <a href="#" className="work__button">
          Demo <i class="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a href="#" className="work__button">
          Repo <i class="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./DataProjects";
import WorkItem from "./WorkItem";

export default function Works() {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      setProjects(
        projectsData.filter(
          (project) => project.category.toLowerCase() === item.name
        )
      );
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <>
      <div className="work__filters">
        {projectsNav.map((navItem, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            key={navItem.name}
            className={`${active === index ? "active-work" : ""} work__item`}
          >
            {navItem.name}
          </span>
        ))}
      </div>
      <div className="work__container container grid">
        {projects.map((project) => (
          <WorkItem key={project.id} item={project} />
        ))}
      </div>
    </>
  );
}

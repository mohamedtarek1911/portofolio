import React, { useEffect, useState } from "react";
import { projectsData } from "./DataProjects";
import { projectsNav } from "./DataProjects";
import WorkItem from "./WorkItem";

export default function Works() {
  const [item, setItem] = useState({ name: "all" });
  const [Projects, setProjects] = useState([]);
  const [Active, setActive] = useState(0);
  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        console.log(project);
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              key={index}
              className={`${
                Active === index ? "active-work" : ""
              } "work__item"`}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {Projects.map((item, index) => {
          return <WorkItem key={index} item={item} />;
        })}
      </div>
    </>
  );
}

import { React, useEffect } from "react";
import "../styles/Work.css";
import { themeChange } from "theme-change";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// projects images
import sundown from "../assets/projects/sundown_clone.png";
import ochi from "../assets/projects/ochi_clone.png";
import Work_studio from "../assets/projects/Work_Studio.png";
import model from "../assets/projects/model.png";
import TwoGood from "../assets/projects/two_good.png";

function Work() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  const projects = [
    {
      name: "Work Studio clone",
      des: "Make this clone using Html, Css and JS",
      github: "https://github.com/Khushbhase/Works-studio-clone",
      img: Work_studio,
      link: "https://works-studio-clone-hhmevvxl2-khushs-projects-05949532.vercel.app/",
    },
    {
      name: "Ochi Clone",
      des: "Ochi website clone, made using React and CSS animations",
      github: "https://github.com/Khushbhase/Ochi_Clone",
      img: ochi,
      link: "https://magical-capybara-90367b.netlify.app/",
    },
    {
      name: "Sundown",
      des: " Sundown clone, made using Html, Css and JS. Used Animations as well.",
      github: "https://github.com/Khushbhase/SunDownClone",
      img: sundown,
      link: "https://stunning-lollipop-144568.netlify.app/",
    },
    {
      name: "Cyberfiction",
      des: " CyberFiction site, made using 3d Model.",
      github: "https://github.com/Khushbhase/3d-site",
      img: model,
      link: "https://dazzling-custard-191423.netlify.app/",
    },
    {
      name: "Two Good CO",
      des: " Two Good Clone",
      github: "https://github.com/Khushbhase/two-good-co",
      img: TwoGood,
      link: "https://two-good-ofbdotyth-khushs-projects-05949532.vercel.app/",
    },
  ];
  return (
    <>
      <meta
        name="description"
        content="Projects I (Shaurya) have made and I'm working on."
      />
      <title>work | snipc</title>
      <div id="hero_text">
        <h2 className="text_hero_text fade-in">Projects</h2>
        <p className="text_hero_text fade-in">
          Projects I've worked on so far.
        </p>
      </div>

      <div id="repos_container fade-in">
        {projects.map((project) => (
          <div className="repo" key={project.link}>
            <LazyLoadImage
              effect="blur"
              src={project.img}
              alt=""
              height="230px"
              width="350px"
            />
            <div id="info_text">
              <h2>{project.name}</h2>
              <p>{project.des}</p>
              <p id="link">
                <a
                  href={project.github}
                  target="_blank"
                  className="project_link"
                >
                  <iconify-icon
                    icon="mingcute:github-line"
                    height="1.5em"
                  ></iconify-icon>
                </a>
                <a href={project.link} className="project_link">
                  <iconify-icon icon="uil:link" height="1.5em"></iconify-icon>
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Work;

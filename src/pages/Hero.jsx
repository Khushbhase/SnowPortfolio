import { React, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "../styles/Hero.css";
import "../styles/Pages.css";
import "../styles/About.css";
import { Avatar } from "../components/Avatar";

function Hero() {
  const [discord_state, setStatus] = useState(false);
  const [statusBg, setStatusBg] = useState("grey");
  const [isDarkTheme, setDarkTheme] = useState(false);
  const statusCircle = useRef("");

  useEffect(() => {
    themeChange(false);
    if (localStorage.getItem("theme") == "dark") {
      setDarkTheme(true);
    }
    fetch("https://api.lanyard.rest/v1/users/742269888579764304")
      .then((res) => res.json())
      .then((json) => {
        let data = json.data.discord_status;
        if (json.data.spotify != null) {
          setStatus(`Listening to ${json.data.spotify.song}`);
          statusCircle.current.style.display = "none";
          document.getElementById("intro").style.display = "flex";
          document.getElementById("spotify").style.display = "inline";
        } else if (data == "offline") {
          setStatus("Offline");
        } else if (data == "online") {
          setStatus("Online");
          setStatusBg("rgb(121, 214, 121)");
        } else if (data == "dnd") {
          setStatus("Busy");
          setStatusBg("rgb(212, 109, 109)");
        } else if (data == "idle") {
          setStatus("AFK");
          setStatusBg("rgb(209, 209, 116)");
        }
      });
  }, []);


  

// Define the date of birth
var dob = new Date("05/31/2002"); // Note: JavaScript Date uses the format MM/DD/YYYY

// Calculate the difference between the current date and the birthdate
var month_diff = Date.now() - dob.getTime();

// Create a new Date object from the difference to get the age
var age_dt = new Date(month_diff);

// Extract the year component from the age date
var year = age_dt.getUTCFullYear();

// Calculate the age by subtracting the birth year from the epoch (1970)
var age = Math.abs(year - 1970);



  return (
    <>
      {/* <Zoom> */}
      <div className="container fade-in">
        {/* here comes the text container  */}
        <div className="text">
          {/* the text in bracket */}
          <h5 id="intro">
            <iconify-icon
              icon="logos:spotify-icon"
              id="spotify"
              height="1.4rem"
            ></iconify-icon>
            &nbsp;
            {/* Loading skeleton for dark mode */}
            {!discord_state && isDarkTheme && (
              <span id="discord_s">
                <Skeleton
                  containerClassName="flex-1"
                  height={19}
                  width={"90px"}
                  baseColor={"#2e2c2c"}
                  highlightColor="#505050"
                />
              </span>
            )}
            {/* Loading skeleton for light mode  */}
            {!discord_state && !isDarkTheme && (
              <span id="discord_s">
                <Skeleton
                  containerClassName="flex-1"
                  height={17}
                  width={"80px"}
                />
              </span>
            )}
            {/* Discord status  */}
            {discord_state && (
              <>
                {" "}
                <span id="circle" style={{backgroundColor:statusBg}} ref={statusCircle}></span>
                <span
                  id="discord_s"
                  data-tooltip-id="discord_status"
                  className="fade-in"
                >
                  {discord_state}
                </span>{" "}
              </>
            )}
            {/* discord status tooltip  */}
            <ReactTooltip
              id="discord_status"
              place="top"
              content="Discord Status"
              style={{
                borderRadius: "10px",
                fontFamily: "'Work Sans', sans-serif",
              }}
            />
          </h5>
          {/* name and about me section  */}
          <h1 id="hello">
            Hello, I'm <span id="Khushal">Khushal</span>
          </h1>
          <p id="about">
            I'm a <b data-tooltip-id="dob">{age}</b> y/o frontend developer
            from Lonavala, India. My loved ones sometimes call me Khush!
          </p>

          <ReactTooltip
            id="dob"
            place="top"
            content="9/02/2009"
            style={{
              borderRadius: "10px",
              fontFamily: "'Work Sans', sans-serif",
            }}
          />
        </div>

        <Avatar />
      </div>

      {/* pages1 section (work & anime)  */}
      <div className="pages1">
        <div id="first" className="page">
          <Link
            to="/work"
            style={{ textDecoration: "none" }}
            preventScrollReset={false}
          >
            <h3>Projects</h3>
            <p>
              View some projects I made on this journey of development. 
            </p>
          </Link>
        </div>

        <div id="second" className="page">
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <h3>contact</h3>{" "}
            <p>
              Wanna Chitchat? Stumped on a project? Just ask! I'm always happy
              to help out a friend in need.
            </p>
          </Link>
        </div>
      </div>

      {/* page2 secion */}
      <div className="pages2">
        {/* /donate  */}
        <div id="third" className="page">
          <Link to="/support" style={{ textDecoration: "none" }}>
            <h3>support</h3>
            <p>
              Support my work to help me create something that will blow up
              people's minds!
            </p>
          </Link>
        </div>

        {/* /stack   */}
        <div id="fourth" className="page">
          <Link to="/stack" style={{ textDecoration: "none" }}>
            <h3>stack</h3>
            <p>
              The tools that power my life and make me look like a genius (even
              though I'm not).
            </p>
          </Link>
        </div>
      </div>

      <p id="pages_title">MORE</p>
      <div id="more_pages">
        <div id="first" className="page">
          <Link
            to="/inspiration"
            style={{ textDecoration: "none" }}
            preventScrollReset={false}
          >
            <h3>Inspirations</h3>
            <p>
              This button leads to page where I listed the people I take inspirations from. (Fiction & Non Fiction)
            </p>
          </Link>
        </div>

      </div>

      <p id="pages_title" style={{ marginTop: "20vh" }}>
        ABOUT ME
      </p>
      <div id="about_me" data-aos="fadeInUp" data-aos-anchor=".other-element">
        <p id="about_para">
          My name is <span id="Khushal">Khushal</span>, and i code for living.
          <br /> <br /> When I'm not working, you can find me around songs, books and sports. (Though, as it's my last year. I code most of the time.)
          <br /> <br />
          "The reason you don't have what you want is because you don't deserve it (period)"
        </p>
        <LazyLoadImage
          effect="blur"
          src="https://media.giphy.com/media/Y1IFN5kK9E7fO/giphy.gif"
          alt="some random anime gif"
          id="about_me_gif"
        />
      </div>
      {/* </Zoom> */}
    </>
  );
}

export default Hero;

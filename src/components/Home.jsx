import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillGithub,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Sufyan<span>.Dev</span></h1>
          <p>Solution to all your problems at one place</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          I am Md Sufyan Khan.One of the team with my friends. We work on the different problems faced as a student by the students ans as well as non technical persons in our life and provide guidence.
        One of the major problems faced in our college life was we didnt know where to start anything whether it is our university syllabus or our professional skills
        We all know there is a vast numbers of topics available in Computer Science Stream like
        WEB Development,App Development,Data analytics and many more 
        and there is a huge numbers of concept as well like html,css,js,nodeJS,Express,frameworks(react,angular,vue),android,ios and many more we cant even name allSo we provide a correct sequences for anythingwe want to become and we know that the right direction is must.And we provide the same.Happy Hacking!!
          </p>
        </div>
      </div>

      <div className="home4" id="connect">
        <div>
          <h1>Connect_on</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <a href="mailto:khansufyan948gmail.com" target={"_blank"} rel="noreferrer"><AiFillMail /></a>
              <p>Mail</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <a href="https://www.github.com/Sufyan04" target={"_blank"} rel="noreferrer"><AiFillGithub/></a>
              <p>Github</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <a href="https://www.linkedin.com/khan-sufyan7" target={"_blank"} rel="noreferrer"><AiFillLinkedin/></a>
              <p>Linkedin</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }} 
            >
              <a href="https://www.instagram.com/khan__sufyan_" target={"_blank"} rel="noreferrer"><AiFillInstagram /></a>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
import React from "react";
import mybg from "../../image/my-bg.png";

const AboutMe = () => {
  return (
    <div className=" bg-base-300 mt-20 rounded-xl mb-20">
      <div className="hero  bg-base-300 lg:p-5">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={mybg}
            className="lg:max-w-lg rounded-lg shadow-2xl lg:mr-10"
            alt=""
          />
          <div data-aos="fade-up" data-aos-duration="3000">
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="py-6">
              I’m Arjun Chandra Das, a passionate and detail-oriented Junior
              Frontend Developer with over 1 year of professional experience.
              Specializing in React.js, Next.js, and TypeScript, I focus on
              building responsive, scalable, and high-performance web
              applications. With a background in Computer Science and hands-on
              experience in modern frontend technologies, I have contributed to
              a variety of real-world projects, ensuring clean code and
              efficient development.
            </p>
            <p>
              My expertise includes working with HTML, CSS, Tailwind CSS, and
              SASS, allowing me to create user-friendly interfaces. I have
              experience building Progressive Web Applications (PWAs) and
              cross-platform mobile apps using React Native, ensuring an
              optimized user experience across devices. My goal is to write
              secure, maintainable, and future-proof software that solves
              real-world problems.
            </p>

            <p>
              I’m always eager to expand my knowledge and work on innovative
              projects that push the boundaries of web development. If you’re
              looking for a developer who is passionate about creating robust,
              user-centric applications, feel free to reach out!
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

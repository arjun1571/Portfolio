import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faLinkedin,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
const Fotter = () => {
  return (
    <div className="bg-base-300 h-36 rounded-xl">
      <div className="flex mt-24 py-10  justify-center">
        <a
          href="https://www.facebook.com/profile.php?id=100027943727580"
          target="_blank"
          rel=""
        >
          <FontAwesomeIcon className="w-10 h-8" icon={faSquareFacebook} />
        </a>
        <a href="https://github.com/arjun1571" target="_blank">
          <FontAwesomeIcon className="w-10 h-8" icon={faSquareGithub} />
        </a>
        <a href="https://www.linkedin.com/in/arjundasbd/" target="_blank">
          <FontAwesomeIcon className="w-10 h-8" icon={faLinkedin} />
        </a>
      </div>
      <p className="flex justify-center">
        <small>
          Copyright © 2024 - All right reserved by Arjun Chandra Das
        </small>
      </p>
    </div>
  );
};

export default Fotter;

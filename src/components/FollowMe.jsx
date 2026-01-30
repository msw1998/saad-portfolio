import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FollowMeComponent = () => {
    return (
        <div className="hidden md:block absolute top-1/2 right-3 z-20 transform -translate-y-1/2 items-center">
        <div className="flex flex-col items-center">
        <a href="https://www.linkedin.com/in/saadwasif" target="_blank" rel="noopener noreferrer" className="text-white my-2">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/msw1998" target="_blank" rel="noopener noreferrer" className="text-white my-2">
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://drive.google.com/file/d/1DTCE2Lun1fg4xyvz85BwwT3vj7T-aw8Z/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-white my-2" title="Resume">
            <FontAwesomeIcon icon={faFileLines} size="2x" />
        </a>
          <div className="h-[50px] min-h-[1em] w-px bg-white opacity-50 mb-2"></div>
          <p className="text-white text-xl transform -rotate-90 mt-8">Follow Me</p>
          
        </div>
      </div>
    );
  };
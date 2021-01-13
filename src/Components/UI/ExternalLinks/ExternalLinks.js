import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//  import { fabFaGithubSquare } from '@fortawesome/free-solid-svg-icons';
// import {faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import './ExternalLinks.css'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';






const externalLinks = () => {
    return (
        <div className="externalLinks">

        
        <a href = "https://www.linkedin.com/in/shanip27" id="linkedin">
        <FontAwesomeIcon icon={faLinkedin}/>
        </a>
         
       
        <a href="https://github.com/shanipj" id="github">
        <FontAwesomeIcon icon={faGithubSquare}  />
        </a>
        </div>
        

        
    )}

export default externalLinks;
// <a href="www.linkedin.com/in/shanip27">
// <FontAwesomeIcon icon={faLinkedin}/>

        
// </a>
// <a href="https://github.com/shanipj">
// </a>
// <FontAwesomeIcon icon={fabFaGithubSquare}/>

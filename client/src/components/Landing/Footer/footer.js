import React from "react";
import { FaGithub } from 'react-icons/fa';


const Footer = () => (
 <footer className="footer">
   <FaGithub className = "githubIcon"/><a href={"https://github.com/QueenAyana/Hubble.Com"} target="_blank" rel="noopener noreferrer" className = "githubLink">Github Repository</a>
 </footer>
);

export default Footer;
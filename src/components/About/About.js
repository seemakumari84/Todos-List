import React from "react";
import "./About.css";
import gitImages from "../../images/github.png";
import linkedinImages from "../../images/linkedin.png";
function About(){
    return(
      <div className="about_cont">
        <p className="about_text1"><span>Hi,</span>my name is </p>
        <p className="about_text2">Seema Kumari</p>
        <p className="about_text3">I am an SDE at <span>Astomverse Innovations Pvt. Ltd.</span></p>
        <p className="about_desc"><span id="highlight">NIT Patna Student Clubs:</span>
          <li>Blockchain Team member in <span>Hackslash club</span></li>
          <li>Technical Team member in <span>Robotics club</span></li>
          <li>Web Team member in <span>Tesla club</span></li>
        <p id="h">Pursuing a BTech+MTech(Dual Degree) in Electrical Engineering from the National Institute of Technology, Patna.
        I have work experience as an SDE Intern at Astomverse Innovations Pvt. Ltd., where I developed website using React.js, created UI/UX designs, and built 3D models using Blender.My technical skills span multiple programming languages including Java, C, and JavaScript, with proficiency in frameworks like React.js.I'm also well-versed in various development and design tools such as Visual Studio Code, Blender, Canva, and Figma.My expertise extends into the realm of ethical hacking, with knowledge of tools like Burp Suite, Wireshark, and Metasploit Framework.Her proactive involvement in various technical clubs at NIT Patna, including robotics, blockchain, and web development, underscores her commitment to continuous learning and professional development.</p></p>
        <div>
          <a href="https://github.com/seemakumari84" target="_blank">
            <img src={gitImages} alt="githubImage" width="64px" id="gitImg"/>  </a>
          <a href="https://www.linkedin.com/in/seemakumari8"target="_blank">
            <img src={linkedinImages} alt="linkedIn Image"width="64px"/>  </a>      
        </div>
        <a href="mailto:seemakumari8122005@gmail.com" target="_blank"><button className="about_button">Get in Touch</button>  </a>      </div>
    )
}
export default About;
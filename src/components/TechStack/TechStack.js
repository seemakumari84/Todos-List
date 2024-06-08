import React from "react";
import "./TechStack.css";
import cyber from "../../images/cyber.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import java from "../../images/java.png";
import solidity from "../../images/solidity.png";
import firebase from "../../images/firebase.png";
import react from "../../images/react.png";
import app from "../../images/app dev.png";

function TechStack(){
    return(
        <div className="TechStack_cont">
            <p className="Techstack_title">TechStack</p>
            <div className="Techstack_img_row_cont">
                <div className="techstack_img_cont_row1">  
                    <div className="teckstack_img_element_cont"><img src={cyber} alt="cyberImage"/>
                    <p>Cybersecurity</p></div>
                <div className="teckstack_img_element_cont"><img src={react} alt="reactImage"/>
                    <p>React</p></div>
                <div className="teckstack_img_element_cont"><img src={app} alt="appImage"/>
                    <p>AppDev</p></div>
                <div className="teckstack_img_element_cont"><img src={solidity} alt="solidityImage"/>
                    <p>Solidity</p></div>
                    </div>
            <div className="techstack_img_cont_row2">  
                    <div className="teckstack_img_element_cont"><img src={html} alt="htmlImage"/>
                    <p>HTML</p></div>
                <div className="teckstack_img_element_cont"><img src={css} alt="cssImage"/>
                    <p>CSS</p></div>
                <div className="teckstack_img_element_cont"><img src={java} alt="javaImage"/>
                    <p>Java</p></div>
                <div className="teckstack_img_element_cont"><img src={firebase} alt="firebaseImage"/>
                    <p>Firebase</p></div>
                    </div>            
                        <p className="techstack_title">Electrical Engineer at NIT Patna<br/>@Seema Kumari</p><p className="sdnj">@Seema Kumari</p>

                    </div>
                    </div>
    )
}
export default TechStack;
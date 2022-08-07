import React from "react";
import './style/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouseChimney} from '@fortawesome/free-solid-svg-icons'
import {faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'
import {faCubes} from '@fortawesome/free-solid-svg-icons'
import {faAward} from '@fortawesome/free-solid-svg-icons'


export default function Header({activeButton}) {

  return (
    <section id="sec-2">
      <nav>
        <ul>
          <li onClick={()=>{activeButton("b1")}}><div className="navButton active" id="b1"><FontAwesomeIcon className="navIcon" icon={faHouseChimney}/></div></li>
          <li onClick={()=>{activeButton("b2")}}><div className="navButton" id="b2"><FontAwesomeIcon className="navIcon" icon={faUserGraduate}/></div></li>
          <li onClick={()=>{activeButton("b3")}}><div className="navButton" id="b3"><FontAwesomeIcon className="navIcon" icon={faBriefcase}/></div></li>
          <li onClick={()=>{activeButton("b4")}}><div className="navButton" id="b4"><FontAwesomeIcon className="navIcon" icon={faCubes}/></div></li>
          <li onClick={()=>{activeButton("b5")}}><div className="navButton" id="b5"><FontAwesomeIcon className="navIcon" icon={faAward}/></div></li>
        </ul>
      </nav>
    </section>
  );
}
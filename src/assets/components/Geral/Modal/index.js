import React, { useEffect } from "react";
import './style/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-regular-svg-icons'
import {faUserTie} from '@fortawesome/free-solid-svg-icons'

export default function Modal({id, imagem, title, text, time, role, closeModal}) {

  // const stringToHTML=()=>{
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(text, 'text/html');
  //   console.log(doc.body.children[0])
  //   const t = doc.body.children[0]
  //   return t
  // }

  return (
    <div className="darkScreen" id={id}>
      <div className="modalContent" >
        <div className="modalSec45">
          <img src={imagem} />
        </div>
        <div className="modalSec55">
          <header className="modalHeader">
            <h1 className="modalTitle">{title}</h1>
            <button className="closeButton" onClick={()=>{closeModal(id)}}><FontAwesomeIcon className="navIcon" icon={faXmark}/></button>
          </header>
          <main className="modalMain">
            <div className="iconSec">
              <div><FontAwesomeIcon className="modalIcon" icon={faClock}/>{time}</div>
              <div><FontAwesomeIcon className="modalIcon" icon={faUserTie}/><div><p>{role}</p></div></div>
            </div>
            <div className="contentSec" dangerouslySetInnerHTML={{__html: text}}></div>
          </main>
        </div>
      </div>
    </div>
  );
}
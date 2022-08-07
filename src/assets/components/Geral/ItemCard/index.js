import React from "react";
import './style/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function ItemCard({type, imagem, porcentagem, title, text, action, idModal}) {

  const Box=()=>{
    if(type==='percentual'){
      return (
      <>
        <div className="circleItem">
          <svg>
            <circle cx="30" cy="30" r="30"></circle>
            <circle cx="30" cy="30" r="30" style={{strokeDashoffset: `calc(185 - (185 * ${porcentagem})/100)`}}></circle>
          </svg>
          <div className="number"><h3>{porcentagem}%</h3></div>
        </div>
        <div className="itemBox">
          <div className="textContent">
            <div className="titleBox">
              <h3 className="titulo">{title}</h3>
              {
                action
                ?<button onClick={()=>{action(idModal)}}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                :null
              }
            </div>
            <p>{text}</p>
          </div>
        </div>
      </>
      )
    } else if(type==='image'){
      return (
        <>
          <div className="circleItem">
            <img className="ImageIcon" src={imagem} alt="ícone" />
          </div>
          <div className="itemBox">
            <div className="textContent">
            <div className="titleBox">
              <h3 className="titulo">{title}</h3>
              {
                action
                ?<button onClick={()=>{action(idModal)}}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                :null
              }
            </div>
              <p>{text}</p>
            </div>
          </div>
        </>
      )
    }

    return
  }

  return (
    <div className="itemContainer">
      {Box()}
    </div>
  );
}
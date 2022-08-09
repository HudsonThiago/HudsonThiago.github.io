import React from "react";
import WindowDimensions from "../../Geral/WindowDimensions";
import './style/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function ItemCard({type, imagem, porcentagem, title, text, action, idModal}) {
  const { height, width } = WindowDimensions();

  const dimension=(axis)=>{
    
    let cx = 30
    let cy = 30
    let r = 30
    if(width > 1200){
      cx=30
      cy=30
    } else if(width > 900 && width <= 1200){
      cx=25
      cy=25
      r=25
    }

    if(axis=="x"){
      return cx
    } else if(axis=="y"){
      return cy
    } else {
      return r
    }
  }

  const Box=()=>{
    if(type==='percentual'){
      return (
      <>
        <div className="circleItem">
          <svg>
            <circle cx={dimension("x")} cy={dimension("x")} r={dimension("r")}></circle>
            <circle cx={dimension("x")} cy={dimension("x")} r={dimension("r")} style={{strokeDashoffset: `calc(185 - (185 * ${porcentagem})/100)`}}></circle>
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
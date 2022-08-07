import React, { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import ItemCard from "../../../Geral/ItemCard";

export default function Formacao() {

  const Data = require('../../../../Data/Data')
  const [formacao, setFormacao] = useState(Data.formacao())

  return (
    <div className="box">
      <header className="headerBody">
        <div className="headerBox">
            <div className="CircleHeader">
            <FontAwesomeIcon className="navIcon" icon={faUserGraduate}/>
            </div>
            <h2>Formação</h2>
        </div>
      </header>
      <main className="mainBody">
        {
          formacao.map((i)=>{
            return <ItemCard type="percentual" porcentagem={i.percent} title={i.title} text={i.text} />
          })
        }
      </main>
    </div>
  );
}
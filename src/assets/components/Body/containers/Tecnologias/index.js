import React, { useState } from "react";
import ItemCard from "../../../Geral/ItemCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/free-solid-svg-icons'

export default function Tecnologias() {

  const Data = require('../../../../Data/Data')
  const [tecnologias, setTecnologias] = useState(Data.tecnologias)

  return (
    <div className="box">
        <header className="headerBody">
          <div className="headerBox">
              <div className="CircleHeader">
              <FontAwesomeIcon className="navIcon" icon={faCubes}/>
              </div>
              <h2>Tecnologias</h2>
          </div>
        </header>
        <main className="mainBody">
            {
              tecnologias.map((i)=>{
                return <ItemCard type={'image'} imagem={require(`../../../../images/tecnologias/${i.image}`)} title={i.title} />
              })
            }
        </main>
    </div>
  );
}
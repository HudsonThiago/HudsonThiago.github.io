import React, { useEffect, useState} from "react";
import ItemCard from "../../../Geral/ItemCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouseChimney} from '@fortawesome/free-solid-svg-icons'

import Modal from "../../../Geral/Modal";


export default function Inicio() {

  return (
    <div className="box">
        <header className="headerBody">
          <div className="headerBox">
              <div className="CircleHeader">
              <FontAwesomeIcon className="navIcon" icon={faHouseChimney}/>
              </div>
              <h2>Início</h2>
          </div>
        </header>
        <main className="mainBody">
        </main>
    </div>
  );
}
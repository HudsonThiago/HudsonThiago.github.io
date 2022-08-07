import React, { useState } from "react";
import ItemCard from "../../../Geral/ItemCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'

import Modal from "../../../Geral/Modal";

//images
import Eject from "../../../../images/trabalho/eject.png"
import modal1 from "../../../../images/backgrounds/trabalhoModal1.jpg"

export default function Portfolio() {

  const textModal1=()=>{
    return (<>
      <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </>
    )
  }

  const openModal=(id)=>{
    const el = document.getElementById(id)
    el.classList.add("openModal")

    console.log(el)
  }

  const closeModal=(id)=>{
    const el = document.getElementById(id)
    el.classList.remove("openModal")

    console.log(el)
  }

  return (
    <div className="box">
        <header className="headerBody">
          <div className="headerBox">
              <div className="CircleHeader">
              <FontAwesomeIcon className="navIcon" icon={faAward}/>
              </div>
              <h2>Portfolio</h2>
          </div>
        </header>
        <main className="mainBody">
          <ItemCard type={'image'} imagem={Eject} title="EJECT" action={openModal} idModal={'modal-1'} />
          <Modal id={'modal-1'} imagem={modal1} title={'EJECT'} text={textModal1()} time={'1 ano e 8 meses'} role={'Assessor de projetos ➔ Gerente de projetos'} closeModal={closeModal}/>
        </main>
    </div>
  );
}
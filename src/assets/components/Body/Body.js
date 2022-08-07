import React, { useEffect, useState} from 'react';
import './style/style.css'
import WindowDimensions from '../Geral/WindowDimensions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouseChimney} from '@fortawesome/free-solid-svg-icons'
import {faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'
import {faCubes} from '@fortawesome/free-solid-svg-icons'
import {faAward} from '@fortawesome/free-solid-svg-icons'
import ItemCard from '../Geral/ItemCard';
import Formacao from './containers/Formacao/'
import Tecnologias from './containers/Tecnologias'
import Trabalho from './containers/Trabalho'
import Portfolio from './containers/Portfolio';
import Inicio from './containers/Inicio';

export default function Body({screen}) {

  const { height, width } = WindowDimensions();

  const Box=()=>{
    switch(screen){
      case 1:
        return <Inicio/>
      case 2:
        return <Formacao/>
      case 3:
        return <Trabalho/>
      case 4:
        return <Tecnologias/>
      case 5:
        return <Portfolio/>
    }
  }

  return (
    <section id="sec-3">
      <div className="container" style={{width: `calc(${width}-560)`}}>
        {Box()}
      </div>
    </section>
  );
}
import React, {useState, useEffect} from "react";
import './style/style.css'
import Header from '../Header/Header'
import Body from '../Body/Body'

export default function Main() {

  const [screen, setScreen] = useState(1)

  const activeButton=(id)=>{

    const reset=()=>{
      const list = document.querySelectorAll('.navButton')
      for(let i=0;i<list.length;i++){
        if(list[i].classList.contains('active')){
          list[i].classList.remove('active')
        }
      }
    } 

    window.setTimeout( function(){
      reset()
      const button = document.getElementById(id)
      button.classList.add("active")

      switch(id){
        case 'b1':
          setScreen(1)
          break
        case 'b2':
          setScreen(2)
          break
        case 'b3':
          setScreen(3)
          break
        case 'b4':
          setScreen(4)
          break
        case 'b5':
          setScreen(5)
          break
      }

    },0)
  }

  return (
    <div id="main">
      <Header activeButton={activeButton} />
      <Body screen={screen} />
    </div>
  );
}
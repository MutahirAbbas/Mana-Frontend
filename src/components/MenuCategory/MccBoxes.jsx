import React, { useState } from 'react'
import MP from "../../images/Milk-Powder.png";
import MPP from "../../images/protein-shake.png";
import Chesse from "../../images/cheese.png";
import Fat from "../../images/spread.png";
import { useNavigate } from "react-router-dom";

export default function MccBoxes() {
    let history = useNavigate();
    const [appState, changeState] = useState({
        activeObject: null,
        objects: [
          {
            id: 1,
            title: "Milk Powders",
            imgSrc: MP,
            src:'/checkMilkPowders'
          },
          {
            id: 2,
            title: "Milk Protein Concentrates",
            imgSrc: MPP,
            src:'/checkProtienCont'
          },
          {
            id: 3,
            title: "Cheese",
            imgSrc: Chesse,
            src:'/checkCheeseCont'
          },
          {
            id: 4,
            title: "Anhydrous Milk Fat & Butter",
            imgSrc: Fat,
            src:'/CheckFatCont'
          },
        ],
      });
    
      function toggleActiveMP() {
          history('/checkMilkPowders')
      }
      function toggleActiveMP2() {
        history('/checkProtienCont')
    }
    function toggleActiveMP3() {
      history('/checkCheeseCont')
  }
  function toggleActiveMP4() {
    history('/CheckFatCont')
}
    
      function toggleActiveStyles(index) {
        if (appState.objects[index] === appState.activeObject) {
          return " box active";
        } else {
          return "box inactive";
        }
      }
    
  return (
    <div className="mcc-boxes mcc-boxes-flex px-5">

      <div
        className="box inactive"
        onClick={toggleActiveMP}
      >
        <img src={MP} alt="" />
        <p className="box-title mb-0">Milk Powders</p>
      </div>
      <div
        className="box inactive"
        onClick={toggleActiveMP2}
      >
        <img src={MPP} alt="" />
        <p className="box-title mb-0">Milk Protein Concentrates</p>
      </div>
      <div
        className="box inactive"
        onClick={toggleActiveMP3}
      >
        <img src={Chesse} alt="" />
        <p className="box-title mb-0">Cheese</p>
      </div>
      <div
        className="box inactive"
        onClick={toggleActiveMP4}
      >
        <img src={Fat} alt="" />
        <p className="box-title mb-0">Anhydrous Milk Fat & Butter</p>
      </div>
      <div className="nextLink">Click on category to select</div>
  </div>
  )
}

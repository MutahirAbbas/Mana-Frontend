import React from 'react'
import MP from "../../images/Milk-Powder.png";
import EnqContainer from "../../redux/Containers/EnqContainer";
import MPP from "../../images/protein-shake.png";
import Chesse from "../../images/cheese.png";
import Fat from "../../images/spread.png";
import { useNavigate } from "react-router-dom";
import FatVariantsContainer from '../../redux/Containers/FatVariantsContainer';


export default function CheckFatVariants() {
  let history = useNavigate();
  function toggleActiveMP() {
    history("/checkMilkPowders");
  }
  function toggleActiveMP2() {
    history("/checkProtienCont");
  }
  function toggleActiveMP3() {
    history("/checkCheeseCont");
  }
  function toggleActiveMP4() {
    history("/CheckFatCont");
  }
  return (
    <div className="productsDetails">
    <div className="row p-0 m-0 h-100">
      <div className="col-lg-9 p-0 col-md-12 col-sm-12">
        <div className="uper-menu">
          <p className="uper-menu-title">Menu Category</p>
          <div className="mcc-boxes mcc-boxes-flex px-5">
              <div className="box inactive" onClick={toggleActiveMP}>
                <img src={MP} alt="" />
                <p className="box-title mb-0">Milk Powders</p>
              </div>
              <div className="box inactive" onClick={toggleActiveMP2}>
                <img src={MPP} alt="" />
                <p className="box-title mb-0">Milk Protein Concentrates</p>
              </div>
              <div className="box inactive" onClick={toggleActiveMP3}>
                <img src={Chesse} alt="" />
                <p className="box-title mb-0">Cheese</p>
              </div>
              <div className="box active" onClick={toggleActiveMP4}>
                <img src={Fat} alt="" />
                <p className="box-title mb-0">Anhydrous Milk Fat & Butter</p>
              </div>
            </div>
        </div>
        <div className="down-menu">
          <div className="uper-menu-title">Products</div>
            <FatVariantsContainer />
        </div>
      </div>
      <div className="col-lg-3 p-0 col-md-12 col-sm-12">
        <EnqContainer/>
      </div>
    </div>
  </div>
  )
}

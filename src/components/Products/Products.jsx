import React, { useState } from "react";
import Enquire from "../Enquiry/Enquire";
import MccBoxes from "../MenuCategory/MccBoxes";
import CheeseVariants from "./Cheese/CheeseVariants";
import Fatvariants from "./FatFilled/Fatvariants";
import MilkProducts from "./MilkProducts/MilkProducts";
import MilkProtienProducts from "./MilkProtienProducts/MilkProtienProducts";
import MP from "../../images/Milk-Powder.png";
import MPP from "../../images/protein-shake.png";
import Chesse from "../../images/cheese.png";
import Fat from "../../images/spread.png";
import MilkProtienContainer from "../../redux/Containers/MilkProtienContainer";
import CheeseContainer from "../../redux/Containers/CheeseContainer";
import FatFilledContainer from "../../redux/Containers/FatFilledContainer";
import FatVariantsContainer from "../../redux/Containers/FatVariantsContainer";
import EnqContainer from "../../redux/Containers/EnqContainer";

  export default function Products(props) {
    console.log("object PRODUCT PROPS", props);
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      {
        id: 1,
        title: "Milk Powders",
        imgSrc: MP,
      },
      {
        id: 2,
        title: "Milk Protein Concentrates",
        imgSrc: MPP,
      },
      {
        id: 3,
        title: "Cheese",
        imgSrc: Chesse,
      },
      {
        id: 4,
        title: "Anhydrous Milk Fat & Butter",
        imgSrc: Fat,
      },
    ],
  });

  function toggleActive(index) {
    changeState({ ...appState, activeObject: appState.objects[index] });
  }

  function toggleActiveStyles(index) {
    if (appState.objects[index] === appState.activeObject) {
      return " box active";
    } else {
      return "box inactive";
    }
  }
  return (
    <div className="productsDetails">
      <div className="row p-0 m-0 h-100">
        <div className="col-lg-9 p-0 col-md-12 col-sm-12">
          <div className="uper-menu">
            <p className="uper-menu-title">Menu Category</p>
            <div className="mcc-boxes">
              {appState.objects.map((element, i) => (
                <div
                  className={toggleActiveStyles(i)}
                  onClick={() => {
                    toggleActive(i);
                  }}
                  key={i}
                >
                  <img src={element.imgSrc} alt="" />
                  <p className="box-title mb-0">{element.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="down-menu">
            <div className="uper-menu-title">Products</div>
            {appState.activeObject != null && appState.activeObject.id === 1 ? (
              <MilkProducts />
            ) : null}
            {appState.activeObject != null && appState.activeObject.id === 2 ? (
              <MilkProtienContainer/>
            ) : null}
            {appState.activeObject != null && appState.activeObject.id === 3 ? (
              <CheeseContainer/>
            ) : null}
            {appState.activeObject != null && appState.activeObject.id === 4 ? (
              <FatVariantsContainer/>
            ) : null}
          </div>
        </div>
        <div className="col-lg-3 p-0 col-md-12 col-sm-12">
          <EnqContainer/>
        </div>
      </div>
    </div>
  );
}

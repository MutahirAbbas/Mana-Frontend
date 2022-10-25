import React, { useState } from "react";
import SkimMilk from "../SkimMilk";
import WholeMilk from "../WholeMilk";
import FatFilled from "../FatFilled";
import Container from "../../../redux/Container";
import WholeMilkContainer from "../../../redux/Containers/WholeMilkContainer";
import FatFilledContainer from "../../../redux/Containers/FatFilledContainer";

export default function MilkProducts() {
  const [appStateMP, changeStateMP] = useState({
    activeObjectMP: null,
    objectsMP: [
      {
        id: 1,
        title: "SKIM MILK",
      },
      {
        id: 2,
        title: "WHOLE MILK",
      },
      {
        id: 3,
        title: "FAT FILLED",
      },
    ],
  });
  function toggleActiveMP(index) {
    changeStateMP({ ...appStateMP, activeObjectMP: appStateMP.objectsMP[index] });
    console.log(appStateMP);
  }

  function toggleActiveMPStyles(index) {
    if (appStateMP.objectsMP[index] === appStateMP.activeObjectMP) {
      return "p-active";
    } else {
      return "p-inactive";
    }
  }

  return (
    <>
      <div className="products-boxes">
        {appStateMP.objectsMP.map((element, i) => (
          <div
            className={toggleActiveMPStyles(i)}
            onClick={() => {
              toggleActiveMP(i);
            }}
            key={i}
          >
            <p className="p-box mb-0">{element.title}</p>
          </div>
        ))}
      </div>

      {appStateMP.activeObjectMP != null && appStateMP.activeObjectMP.id === 1 ? (
        <Container/>
      ) : null}
      {appStateMP.activeObjectMP != null && appStateMP.activeObjectMP.id === 2 ? (
        <WholeMilkContainer/>
      ) : null}
      {appStateMP.activeObjectMP != null && appStateMP.activeObjectMP.id === 3 ? (
        <FatFilledContainer/>
      ) : null}
    </>
  );
}

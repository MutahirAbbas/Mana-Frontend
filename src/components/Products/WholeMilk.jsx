import React from 'react'
import Plus from "../../images/plus.png";
export default function WholeMilk(props) {
  return (
    <div className="choose-product">
    <div className="choose-product-box">
      Regular
      <span className="add-product" onClick={()=>props.addItemHandler({title:'WM-Regular'})}>
        <img src={Plus} alt="Plus" />
      </span>
    </div>
    <div className="choose-product-box">
      Instant
      <span className="add-product" onClick={()=>props.addItemHandler({title:'WM-Instant'})}>
        <img src={Plus} alt="Plus" />
      </span>
    </div>
    <div className="choose-product-box">
    High Heat
Heat-Stable
      <span className="add-product" onClick={()=>props.addItemHandler({title:'WM-High Heat Heat-Stable'})}>
        <img src={Plus} alt="Plus" />
      </span>
    </div>
    <div className="choose-product-box">
    Ultra High
Temperature
      <span className="add-product" onClick={()=>props.addItemHandler({title:'WM-Ultra High Temperature'})}>
        <img src={Plus} alt="Plus" />
      </span>
    </div>
  </div>
  )
}

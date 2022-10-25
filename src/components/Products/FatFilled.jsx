import React from 'react'
import Plus from "../../images/plus.png";
export default function FatFilled(props) {
  return (
    <div className="choose-product">
    <div className="choose-product-box">
      Regular
      <span className="add-product" onClick={()=>props.addItemHandler({title:'FF-Regular'})}>
        <img src={Plus} alt="Plus" />
      </span>
    </div>
    <div className="choose-product-box">
      Instant
      <span className="add-product" onClick={()=>props.addItemHandler({title:'FF-Instant'})}>
        <img src={Plus} alt="Plus" />
      </span>
    </div>
  
  </div>
  )
}

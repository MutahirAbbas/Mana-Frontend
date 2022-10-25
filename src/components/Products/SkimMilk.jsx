import React from 'react'
import Plus from "../../images/plus.png";
export default function SkimMilk(props) {
  console.log("SKIMMM", props);
  // 
  return (
    <div className="choose-product">
    <div className="choose-product-box">
      Medium Heat
      <span className="add-product" onClick={()=>props.addItemHandler({title:'SMP-Medium Heat'})}>
        <img src={Plus} alt="Plus" />
      </span>
    </div>
    <div className="choose-product-box">
      Low Heat
      <span className="add-product" onClick={()=>props.addItemHandler({title:'SMP-Low Heat'})}>
        <img src={Plus} alt="Plus" />
      </span>
    </div>
    <div className="choose-product-box">
      Non Fat Dry Milk
      <span className="add-product" onClick={()=>props.addItemHandler({title:'SMP-Non Fat Dry Milk'})}>
        <img src={Plus} alt="Plus" />
      </span>
    </div>
    <div className="choose-product-box">
      Ultra High Temperature
      <span className="add-product" onClick={()=>props.addItemHandler({title:'SMP-Ultra High Temperature'})}>
        <img src={Plus} alt="Plus" />
      </span>
    </div>
    <div className="choose-product-box">
      High Heat Heat-Stable
      <span className="add-product" onClick={()=>props.addItemHandler({title:'SMP-High Heat Heat-Stabl'})}>
        <img src={Plus} alt="Plus" />
      </span>
    </div>
  </div>
  )
}

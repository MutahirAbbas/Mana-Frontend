import React, { useState } from "react";
import MccBoxes from "./MccBoxes";
import {Link} from 'react-router-dom'
export default function MenuCategory() {
  return (
    <div className="menu-cat-container">
      <p className="mcc-title mb-0">Menu Category</p>

     <MccBoxes/>
    </div>
  );
}

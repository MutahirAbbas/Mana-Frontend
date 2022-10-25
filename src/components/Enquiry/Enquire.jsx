import React from "react";
import Minus from "../../images/minus.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Enquire(props) {
 console.log("ENQUIRY", props.tData[0].enqData.username,)

  let history = useNavigate();
  const submitData = () => {
    if (props.tData.length > 0) {
      axios
        .post("http://localhost:5000/posts", {
          title: props.tData.map((i) => i.enqData.title),
          name:props.tData[0].enqData.username,
          company:props.tData[0].enqData.company,
          destination:props.tData[0].enqData.destination,
          number:props.tData[0].enqData.number,          
        })
        .then(function (response) {
          if (response.status == 200) {
            history("/thankyou");
          }
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Please add some Product in Enquiry before Submitting");
    }
  };

  return (
    <div className="enquiry">
      <p className="mb-0 enq-title">Enquiry</p>
      <div className="choose-product d-flex align-items-center justify-content-center flex-column">
        {props.tData.length > 0  ? (
          props.tData.map((data, i) => (
            <div className="choose-product-box custom-enq-box">
              {data.enqData.title}
              <span
                className="add-product"
                onClick={() => props.removeItemHandler()}
              >
                <img src={Minus} alt="Minus" />
              </span>
            </div>
          ))
        ) : (
          <p>No Items</p>
        )}
      </div>

      <div className="w-100 d-flex align-items-center justify-content-center">
        <button className="submit-btn" onClick={submitData}>
          Submit
        </button>
      </div>
    </div>
  );
}

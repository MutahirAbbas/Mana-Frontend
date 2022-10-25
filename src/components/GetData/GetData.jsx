import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { ExportToExcel } from "../Excel/Excel";

export default function GetData() {
  const [data, setData] = useState([]);
  const [initialState, finalState] = useState([]);
  const tableRef = useRef(null);

  const fileName = "myfile";
  useEffect(() => {
    const returningData = () => {
      axios
        .get("http://localhost:5000/posts")
        .then(function (response) {
          finalState(response.data);
          const ExcelData = initialState.map((user) => ({
            Date: user.date,
            Name: user.name,
            Company: user.company,
            Destination: user.destination,
            Number: user.number,
            Product: user.title.join(',')
          }));
          setData(ExcelData);

          
        })
        .catch(function (error) {
       
          console.log(error);
        })
        .then(function () {
      
        });
    };

    returningData();
  }, []);


  
  return (
    <div>
      {/* {initialState.map((user) => (
        <div className="container" key={user.id}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
                <th scope="col">Company</th>
                <th scope="col">Destination</th>
                <th scope="col">WA Number</th>
                <th scope="col">Products</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="col">{user.date}</td>
                <td scope="col">{user.name}</td>
                <td scope="col">{user.company}</td>
                <td scope="col">{user.destination}</td>
                <td scope="col">{user.number}</td>
                <td scope="col">
                  <p className="mb-0">
                    {user.title.map((i) => (
                      <p>{i}</p>
                    ))}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))} */}

            {
              data&&data.length>0?
              <ExportToExcel apiData={data} fileName={fileName} />:'loading...'
            }
    </div>
  );
}

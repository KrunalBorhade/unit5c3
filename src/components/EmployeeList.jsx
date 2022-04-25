import {useEffect, useState} from "react"
import axios from "axios"


export const EmployeeList = () => {
  const [data, setData] = ([])
  
  useEffect(()=>{
    axios.get("https://localhost:8080/employee").then(({data})=>{
      setData(data)
     
    })
   
  },[])
   console.log(data)
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      <div className="employee_card">
        <img className="employee_image" />
        <span className="employee_name"></span>
        <span className="employee_title"></span>
      </div>
    </div>
  );
};

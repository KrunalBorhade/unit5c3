import {useState, useEffect} from "react";
import {Navigate, useParams} from "react-router-dom";
import axios from "axios"

export const EmployeeDetails = () => {

  const {id} = useParams();
  const [employeeDetails,setemployeeDetails] = useState({})

  useEffect(()=>{
    axios.get(`http://localhost:8080/employee/${id}`).then(({data})=>{
      setemployeeDetails(data)
    })
  },[])
  return (
    <div className="user_details">
      <img className="user_image" src={`${employeeDetails.image}`} />
      <h4 className="user_name">{employeeDetails.employee_name}</h4>
      <span className="user_salary">${employeeDetails.salary}</span>
      <span className="tasks">
        <li className="task">{employeeDetails.tasks}</li>
      </span>
      Status: <b className="status">{employeeDetails.status}</b>
      Title: <b className="title">{employeeDetails.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      {employeeDetails.status==="terminated"?" ":<><button className="fire">Fire Employee</button></>}
      
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};

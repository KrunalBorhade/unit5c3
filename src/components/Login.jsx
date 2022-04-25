import {useState,useEffect} from "react"
import {axios} from "react"



export const Login = () => {
  //  use reqres to log user in.

  const [loginUser,setLoginUser] = useState({
    name:"",
    password:""
  })
  
  return (
    <form className="loginform">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};

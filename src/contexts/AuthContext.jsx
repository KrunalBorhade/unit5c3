import {createContext} from "react"
import {useState} from "react"

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const[isAuth,setIsAuth] = useState(false);
    const [token,setToken] =useState(null);

    const handleAuth = () =>{
        if(IsAuth){
            setToken(null);
            setIsAuth(false);
            return
        }

        fetch("https://reqres.in/api/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        }).then(res=>res.json()).then(data=>{
            setIsAuth(true);
            setToken(data.token)
        })
    }

    return <AuthContext.Provider value={{isAuth,handleAuth}}>{children}</AuthContext.Provider>
}
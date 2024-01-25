import { createContext, useEffect, useState } from "react";
import { IAuthContext, Props, UserAuthenticated } from "./AuthProviderTypes";
import { useNavigate } from "react-router-dom";
import { NAME, TOKEN, USERNAME } from "../utils/Constants";


const initialValue: IAuthContext  = {
    userAuthenticated: { 
        isAuthenticated: false,
        username: null,
        name: null,
        token: null
    },
    setUserAuthenticated: ()=>{}
}

const AuthContext = createContext<IAuthContext>(initialValue);

const handleLogout =  () =>{
    localStorage.removeItem(TOKEN)
    window.location.href = '/login'
}


const handleLogin =  (userAuthenticated: UserAuthenticated) =>{
    localStorage.setItem(TOKEN, userAuthenticated.token || '')
    localStorage.setItem(USERNAME, userAuthenticated.username || '')
    localStorage.setItem(NAME, userAuthenticated.name || '')
}

const AuthProvider = ({children} : Props) => {
    const [userAuthenticated, setUserAuthenticated] = useState(initialValue.userAuthenticated)
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem(TOKEN)
        if(token){
            const username = localStorage.getItem(USERNAME);
            const name = localStorage.getItem(NAME)
            setUserAuthenticated({
                isAuthenticated: true,
                name: name,
                token: token,
                username: username
            })
        }else{
            setUserAuthenticated(initialValue.userAuthenticated)
            navigate('/login')
        }
        console.log('userAuth', userAuthenticated)
    },[navigate])
   
    return (
        <AuthContext.Provider value={{userAuthenticated,setUserAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
};

export {AuthContext, AuthProvider, handleLogout,handleLogin};

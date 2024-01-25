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
    sessionStorage.removeItem(TOKEN)
    window.location.href = '/login'
}


const handleLogin =  (userAuthenticated: UserAuthenticated) =>{
    sessionStorage.setItem(TOKEN, userAuthenticated.token || '')
    sessionStorage.setItem(USERNAME, userAuthenticated.username || '')
    sessionStorage.setItem(NAME, userAuthenticated.name || '')
}

const publicPaths = ["sendemailpassword", "verificationcode","resetpassword","successresetpassword","createuser","userEmailValidation"];

const validatePublicPaths = () =>{
    const currentPath = window.location.href.split('/')[window.location.href.split('/').length -1]
    const size = publicPaths.filter( (x) => x === currentPath);
    if(size.length = 0)
        return false;
    return true

}

const AuthProvider = ({children} : Props) => {
    const [userAuthenticated, setUserAuthenticated] = useState(initialValue.userAuthenticated)
    const navigate = useNavigate()
    useEffect(()=>{
        const token = sessionStorage.getItem(TOKEN)
        if(token){
            const username = sessionStorage.getItem(USERNAME);
            const name = sessionStorage.getItem(NAME)
            setUserAuthenticated({
                isAuthenticated: true,
                name: name,
                token: token,
                username: username
            })
        }else{
            if(!validatePublicPaths()){
                setUserAuthenticated(initialValue.userAuthenticated)
                navigate('/login')
            }
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

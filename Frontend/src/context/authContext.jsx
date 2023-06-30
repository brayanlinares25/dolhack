import React,{createContext, useContext, useEffect, useState} from "react";
import {login} from '../api/auth';

const AuthProvider = createContext();

export const useAuth = () =>{
    const result = useContext(AuthProvider);
    return result
}

export function AuthContext({children}){

    const [User, setUser] = useState([]);

    const [Verific, setVerific] = useState(false);

    useEffect(()=>{
        setVerific(true);
    },[User]);

    async function singLogin(values){
        const rest = await login(values);
        setUser(await rest.data);
    }

    return(
        <AuthProvider.Provider value={{singLogin, User, Verific}}>
            {children}
        </AuthProvider.Provider>
    );
}
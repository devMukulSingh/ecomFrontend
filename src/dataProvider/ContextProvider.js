import { createContext, useState } from "react";

export const LoginContext = createContext(null);

const ContextProvider = ({ children }) => {

    const[username, setUsername] = useState('');

    return(

        <LoginContext.Provider value={{username,setUsername }}>
            {children}
        </LoginContext.Provider >
    )
}
export default ContextProvider;
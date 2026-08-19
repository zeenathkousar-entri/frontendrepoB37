import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {
    // const url = "http://localhost:4000";
    const url='https://backendfinalb37.onrender.com'
    const [token, setToken] = useState("");
    console.log('token is:');
    console.log(token)

    const contextValue = {
        url, token, setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>

    )

}

export default StoreContextProvider
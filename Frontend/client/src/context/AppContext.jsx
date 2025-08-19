import {createContext, useState} from "react";
export  const AppContext=createContext()
const AppContextProvider=(props)=>{
    const [user,setUser]=useState(false)
    const[showLogin,setshowLogin]=useState(false)
    const value={
        user,setUser,showLogin,setshowLogin
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}
export default AppContextProvider
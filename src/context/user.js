import React, { useState } from "react";
import {default as DefaultUser} from "../data";

const UserContext = React.createContext();

function UserProvider( { children } ){

    const [user, setUser] = useState(DefaultUser);
    
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider };
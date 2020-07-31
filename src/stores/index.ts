import React, {useContext} from "react";
import {userStore} from "./User";


export const StoresContext = React.createContext({
   userStore
});

export const useStores = () => useContext(StoresContext);
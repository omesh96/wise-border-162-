
import React, { useReducer } from 'react'
import { createContext } from "react"
import {USER,PRODUCT,PRODUCT_MODAL,TOTAL_PRODUCT} from "./action"
import reducer from './reducer'

export const AuthContext=createContext()

const isAuth={
    user:true,
    product:false,
    product_modal:false,
    total_product:""
}

const AuthContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,isAuth)
  return (
   <AuthContext.Provider value={{state,dispatch,USER,PRODUCT,PRODUCT_MODAL,TOTAL_PRODUCT}}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthContextProvider
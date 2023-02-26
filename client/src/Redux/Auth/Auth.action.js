import { AUTH_LOGOUT, AUTH_SUCCESS } from "./Auth.actionType"


export const UserLogin = ({data, token})=>(dispatch)=>{
    dispatch({type : AUTH_SUCCESS, payload : {data, token}})
}

export const UserLogout = () => (dispatch) =>{
    dispatch({type : AUTH_LOGOUT});
}
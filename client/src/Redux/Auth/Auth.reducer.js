import { AUTH_LOADING, AUTH_ERROR, AUTH_LOGOUT, AUTH_SUCCESS } from "./Auth.actionType"

const initAuthState = {
    loading : false,
    error : false,
    data : {},
    token : ""
}

export const authReducer = (state=initAuthState,{type, payload}) => {
    switch(type){
        case AUTH_LOADING : {
            return {
                ...state,
                loading : true,
                error : false
            }
        }

        case AUTH_ERROR : {
            return {
                ...state,
                loading : false,
                error : true,

            }
        }

        case AUTH_SUCCESS : {
            return {
                ...state,
                loading : false,
                error : false,
                data : payload.data,
                token : payload.token
            }
        }

        case AUTH_LOGOUT : {
            return {
                ...state,
                loading : false,
                error : false,
                data : {},
                token : ""
            }
        }
        default : return state
    }
}
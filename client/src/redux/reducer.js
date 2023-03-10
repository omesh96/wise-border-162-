import * as types from "./actionTypes";

const initialState = {

    products: [],
    isLoading: false,
    isError: false,
    myCartitem:0
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_DATA_REQUEST:
            return { ...state, isLoading: true }
  
        case types.GET_DATA_SUCCESS:
            return { ...state, isLoading: false, products: payload }


        case types.GET_DATA_FAILURE:
            return { ...state, isLoading: false, isError: true }

            case types.UPDATE_DATA: 
            return {...state , products:payload}

        default:
            return state;

    }

  
}
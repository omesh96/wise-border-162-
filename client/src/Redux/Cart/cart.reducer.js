const { CART_LOADING, CART_SUCCESS,CART_ERROR, CART_RESET, CART_CLEAR_ERROR, CART_INC_COUNT, CART_DEC_COUNT } = require("./cart.actionType")

const initialCartState = {
    loading : false,
    error : false,
    data : [],
    cartTotal : 0
}

export const cartReducer = (state = initialCartState, {type , payload}) => {
    switch(type){
        case CART_LOADING : {
            return {...state, loading : true, error : false};
        }
        case CART_ERROR  :{
            return {...state, loading : false, error : payload}
        }
        case CART_CLEAR_ERROR : {
            return ({...state, error : false});
        }
        case CART_SUCCESS : {
            return ({...state, loading : false, data : payload.items , cartTotal : state.cartTotal+payload.sum});
        }
        case CART_INC_COUNT : {
            return ({...state, data : payload.items, cartTotal : state.cartTotal+payload.sum});
        }
        case CART_DEC_COUNT : {
            return ({...state, data : payload.items, cartTotal : state.cartTotal-payload.sum})
        }
        case CART_RESET : {
            return ({...initialCartState});
        }
        default : return state;
    }
}
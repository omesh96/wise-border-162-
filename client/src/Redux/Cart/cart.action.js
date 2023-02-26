import { CART_DEC_COUNT, CART_ERROR,CART_INC_COUNT,CART_CLEAR_ERROR, CART_LOADING, CART_RESET, CART_SUCCESS } from "./cart.actionType"


export const getCartProducts = () => (dispatch) =>{
    dispatch({type : CART_LOADING});
    const res = JSON.parse(localStorage.getItem("bbCart"))||[];
    localStorage.setItem("bbCart",JSON.stringify(res));
    let sum = 0;
    for(let i=0;i<res.length;i++)
    {
        sum+=res[i]['price'];
    }
    dispatch({type : CART_SUCCESS,payload : {items : res, sum : sum}});
}

export const addNewProductCart = (payload)=>(dispatch) =>{
    console.log("hellow cart")
    dispatch({type : CART_LOADING})
    const res = JSON.parse(localStorage.getItem("bbCart"))||[];
    for(let i=0;i<res.length;i++)
    {
        if(payload['_id']===res[i]['_id'])
        {
            dispatch(setError("Product Already in Cart!"));
            return;
        }

    }
    res.push({...payload,productCount : 1});
    localStorage.setItem("bbCart",JSON.stringify(res));
    dispatch({type : CART_SUCCESS, payload : {items : res, sum : payload.price}});
}

export const increaseProductCount = (payload)=>(dispatch)=>{
    dispatch({type : CART_LOADING})
    const res = JSON.parse(localStorage.getItem("bbCart"))||[];
    let sum = 0;
    for(let i=0;i<res.length;i++)
    {
        if(res[i]['_id']===payload && res[i]['productCount']<5)
        {
            res[i]['productCount'] += 1;
            sum = res[i]['price'];
        }
        else if(res[i]['id']===payload)
        {
            dispatch(setError("Product Max Limit Reached"));
            dispatch({type : CART_INC_COUNT, payload : {items : res, sum}})
            return;
        }
    }
    localStorage.setItem("bbCart",JSON.stringify(res));
    dispatch({type : CART_INC_COUNT, payload : {items : res, sum}});
}

export const decreaseProductCount = (payload)=> (dispatch) =>{
    dispatch({type : CART_LOADING});
    const res = JSON.parse(localStorage.getItem("bbCart"))||[];
    let sum=0;
    for(let i=0;i<res.length;i++)
    {
        if(res[i]['_id']===payload && res[i]['productCount']>1)
        {
            res[i]['productCount'] -= 1;
            sum = res[i]['price'];
        }
        else if(res[i]['id']===payload)
        {
            dispatch(setError("Product Min Limit Reached"));
            dispatch({type : CART_DEC_COUNT, payload : {items : res, sum}})
            return;
        }
    }
    localStorage.setItem("bbCart",JSON.stringify(res));
    dispatch({type : CART_DEC_COUNT, payload : {items : res, sum}});
}

export const setError = (payload) => (dispatch) => {
    dispatch({type : CART_ERROR, payload});
    setTimeout(()=>{
        dispatch({type : CART_CLEAR_ERROR})
    },3000)
}

export const removeProductCart = (payload)=>(dispatch)=>{
    dispatch({type : CART_LOADING});
    const res = JSON.parse(localStorage.getItem("bbCart"))||[];
    for(let i=0;i<res.length;i++)
    {
        if(payload['_id']==res[i]['_id'])
        {{
            res.splice(i,1);
            break;
        }}
    }
    localStorage.setItem("bbCart",JSON.stringify(res));
    dispatch({type: CART_SUCCESS, payload : {items : res, sum : payload['price']*payload['productCount']}});
}

export const resetCart = (payload)=>(dispatch)=>{
    dispatch({type : CART_RESET});
}
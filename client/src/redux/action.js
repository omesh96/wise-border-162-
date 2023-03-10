import * as types from "./actionTypes";
import axios from "axios";


const getData = (dispatch) => {
    dispatch({ type: types.GET_DATA_REQUEST });

    return axios.get('http://localhost:8080/products/').then((res) => {
        dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data });
        console.log("data", res.data)
    }).catch((err) => {
        dispatch({ type: types.GET_DATA_FAILURE });
    })
}


const updateProductsRequest = (payload) => {
    return { type: types.UPDATE_DATA, payload }
}


const updateData = ( data) => (dispatch)=> {
    dispatch(updateProductsRequest(data))
}

export { getData, updateData }
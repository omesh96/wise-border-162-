
function reducer(state,action){
    switch(action.type){
        case "user":
            return {
                ...state,
                user:false,
                product:true
            }
            case "product":
                return {
                    ...state,
                    user:true,
                    product:false
                }
                case "product_modal":
                    return {
                        ...state,
                        product_modal:true,
                        user:false,
                    product:false
                    }
                    case "total_product":
                        return {
                            ...state,
                            total_product:action.payload
                        }
                default:{
                    return state;
                }
    }
}
export default reducer
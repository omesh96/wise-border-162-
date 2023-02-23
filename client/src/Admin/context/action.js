
 export const USER={type:"user"}
 export const PRODUCT={type:"product"}

 // for opening add product modal //
 export const PRODUCT_MODAL={type:"product_modal"}

 // count total product //
 export const TOTAL_PRODUCT=(payload)=>{
   return  {type:"total_product",payload:payload}
 }
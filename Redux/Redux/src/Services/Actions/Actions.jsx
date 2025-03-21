import { Add_To_Cart } from "../Constants"

export const addToCart = (data)=>{
    return{
        type:Add_To_Cart,
        data:data
    }
}

export const removeToCart = (data)=>{
    return{
        type:'Remove_To_Cart',
        data:data
    }
}
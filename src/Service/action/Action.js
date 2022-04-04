import { ADD_TO_CART } from '../constant'
//define action function
export const add_to_cart = (data) => {
    return {
        data: data,
        type: ADD_TO_CART
    }
}
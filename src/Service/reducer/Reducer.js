import { ADD_TO_CART } from "../constant";

const initialState = {
    caradData: []
}

export default function cartItem(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                { caradData: action.data }
            ]
        default:
            return state
    }
}
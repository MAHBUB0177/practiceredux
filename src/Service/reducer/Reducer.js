import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

const initialState = {
    cardData: []
}

export default function cartItem(state = [], action) {
    console.log(action)
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                { cardData: action.data }
            ]

        case REMOVE_TO_CART:
            state.pop();
            return [
                ...state,
            ]
        default:
            return state
    }
}
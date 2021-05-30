import * as Types from "../Types/ProductType";

export const getAllProduct = () => async dispatch => {
    dispatch({type: Types.GET_ALL_PRODUCTS, payload: null})
}
export const addToCart = (item) => async dispatch => {
    dispatch({type: Types.ADD_TO_CART, payload: item})
}

export const handleIncrementItem = (id) => async dispatch => {
    dispatch({type: Types.HANDLE_INCREMENT_ITEM, payload: {id:id}})
}

export const handleDecrementItem = (id) => async dispatch => {
    dispatch({type: Types.HANDLE_DECREMENT_ITEM, payload: {id: id}})
}


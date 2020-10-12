import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_PRODUCT,
    REMOVE_PRODUCT
} from './CartConstants'

export function addToCart(payload) {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export function removeFromCart(payload) {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}

export function addProduct(payload) {
    return {
        type: ADD_PRODUCT,
        payload
    }
}

export function removeProduct(payload) {
    return {
        type: REMOVE_PRODUCT,
        payload
    }
}
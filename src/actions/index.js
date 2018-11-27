export const addToCart = (product_id, size) => ({
    type: "ADD_TO_CART",
    product_id,
    size
});

export const clearCart = () => {
    return {
        type: "CLEAR_CART"
    }
};

export const deleteFromCart = (product_id, size) => {
    return {
        type: "DELETE_FROM_CART",
        product_id,
        size
    }
}

export const applyDiscount = () => {
    return {
        type: "APPLY_DISCOUNT"
    }
};

export const removeDiscount = () => {
    return {
        type: "REMOVE_DISCOUNT"
    }
};
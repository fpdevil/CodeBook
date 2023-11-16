// A reducer is a function that takes in two arguments:
// the current state and an action, and returns a new state.
export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartList: action.payload.products,
                total: action.payload.total,
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartList: action.payload.products,
                total: action.payload.total,
            };

        case 'CLEAR_CART':
            return {
                ...state,
                cartList: action.payload.products,
                total: action.payload.total,
            };

        default:
            throw new Error('No matching case found!');
    }
};

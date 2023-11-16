// A reducer is a function that takes in two arguments:
// the current state and an action, and returns a new state.
export const filterReducer = (state, action) => {
    // const { type, payload } = action;

    switch (action.type) {
        case 'PRODUCT_LIST':
            return {
                productList: action.payload.products
            };
        case 'BEST_SELLER_ONLY':
            return {
                ...state,
                bestSellerOnly: action.payload.bestSellerOnly
            };
        case 'INSTOCK_ONLY':
            return {
                ...state,
                inStockOnly: action.payload.inStockOnly
            };
        case 'CLEAR_FILTER':
            return {
                ...state,
                inStockOnly: false,
                bestSellerOnly: false,
                sortBy: null,
                ratings: null
            };
        case 'RATINGS':
            return {
                ...state,
                ratings: action.payload.ratings
            };
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.payload.sortBy
            };
        default:
            throw new Error('No matching case found!');
    }
};

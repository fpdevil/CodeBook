import { createContext, useContext, useReducer } from 'react';
import { filterReducer } from '../reducers/filterReducers';

// create the initial state
const initialState = {
    productList: [],
    inStockOnly: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
};

// Create a context that the components can provide or read
// The Context is created using the createContext() function
// and the function returns an object that contains two properties
// A Provider and a Consumer.
const FilterContext = createContext(initialState);

// Provider provides state to it's children
// Context.Provider component available on the context instance is used
// to provide the context to its child components no matter how deep they are.
export const FilterProvider = ({ children }) => {
    // update the product list every time a new product is added into it
    const [state, dispatch] = useReducer(filterReducer, initialState);

    // And now code for our action what will be dispatched to our reducer
    function updateProductList(products) {
        dispatch({
            type: 'PRODUCT_LIST',
            payload: {
                products
            }
        });
    }

    function bestSeller(products) {
        return state.bestSellerOnly
            ? products.filter((product) => product.best_seller === true)
            : products;
    }

    function inStock(products) {
        return state.inStockOnly
            ? products.filter((product) => product.in_stock === true)
            : products;
    }

    function sort(products) {
        if (state.sortBy === 'low_to_high') {
            return products.sort(
                (a, b) =>
                    Number(a.discount ? a.reduced_price : a.price) -
                    Number(b.discount ? b.reduced_price : b.price),
            );
        }

        if (state.sortBy === 'high_to_low') {
            return products.sort(
                (a, b) =>
                    Number(b.discount ? b.reduced_price : b.price) -
                    Number(a.discount ? a.reduced_price : a.price),
            );
        }

        return products;
    }

    function rating(products) {
        if (state.ratings === '4STARS_AND_ABOVE') {
            return products.filter((product) => product.rating >= 4);
        }
        if (state.ratings === '3STARS_AND_ABOVE') {
            return products.filter((product) => product.rating >= 3);
        }
        if (state.ratings === '2STARS_AND_ABOVE') {
            return products.filter((product) => product.rating >= 2);
        }
        if (state.ratings === '1STARS_AND_ABOVE') {
            return products.filter((product) => product.rating >= 1);
        }

        return products;
    }

    const filteredProductList = rating(sort(inStock(bestSeller(state.productList))));

    // The Provider component accepts a "value" prop which will be
    // passed to consuming components that are descendants of this Provider.
    const value = {
        // productList: [1, 2, 3, 4, 5],
        state,
        dispatch,
        products: filteredProductList,
        updateProductList
    };

    // Wrap the context provider around our component
    return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};

// to allow any component to access functions inside FilterContext.Provider
// define a custom hook useFilter
export const useFilter = () => {
    // consuming the context value
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilter must be used within a Provider');
    }
    return context;
};

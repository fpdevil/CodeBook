import { useContext, useReducer } from 'react';
import { cartReducer } from '../reducers/cartReducers';

const { createContext } = require('react');

// create the initial state
const initialCartState = {
    cartList: [],
    total: 0,
};

// Create a context that the components can provide or read
// The Context is created using the createContext() function
// and the function returns an object that contains two properties
// A Provider and a Consumer.
const CartContext = createContext(initialCartState);

// Provider provides state to it's children
// Context.Provider component available on the context instance is used
// to provide the context to its child components no matter how deep they are.
export const CartProvider = ({ children }) => {
    // update the cart list every time a new product is added into it
    const [state, dispatch] = useReducer(cartReducer, initialCartState);

    // And now code for our action that will be dispatched to our reducer
    function addToCart(product) {
        const updatedCartList = state.cartList.concat(product);
        const updatedCartTotal = product.discount
            ? state.total + product.reduced_price
            : state.total + product.price;

        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                products: updatedCartList,
                total: updatedCartTotal,
            },
        });
    }

    function removeFromCart(product) {
        const updatedCartList = state.cartList.filter((item) => item.id !== product.id);
        const updatedCartTotal = product.discount
            ? state.total - product.reduced_price
            : state.total - product.price;

        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                products: updatedCartList,
                total: updatedCartTotal,
            },
        });
    }

    function clearCart() {
        dispatch({
            type: 'CLEAR_CART',
            payload: {
                products: [],
                total: 0,
            },
        });
    }

    // The Provider component accepts a "value" prop which will be
    // passed to consuming components that are descendants of this Provider.
    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// to allow any component to access functions inside CartContext.Provider
// define a custom hook useFilter
export const useCart = () => {
    // consuming the context value
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a Provider');
    }

    return context;
};

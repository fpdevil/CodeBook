import { Link } from 'react-router-dom';
import { Rating } from './Rating';

import { useCart } from '../../context';
import { useEffect, useState } from 'react';

export const ProductCard = ({ product }) => {
    // global state using context
    const { cartList, addToCart, removeFromCart } = useCart();

    // state for item in cart
    const [inCart, setInCart] = useState(false);

    const { id, name, overview, rating, price, discount, reduced_price, best_seller, poster } =
        product;

    useEffect(() => {
        const productInCart = cartList.find((item) => item.id === product.id);
        if (productInCart) {
            setInCart(true);
        } else {
            setInCart(false);
        }
    }, [cartList, product.id]);

    // eslint-disable-next-line
    function handleAdd(product) {
        addToCart(product);
    }

    return (
        <div className="justify-center px-4 max-w-sm transition duration-300 ease-in sm:px-8 dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
            <article className="flex overflow-hidden flex-col my-4 mx-auto w-full text-gray-900 bg-white rounded-lg border border-gray-300 transition hover:shadow-lg dark:border-slate-600 dark:bg-slate-800">
                <Link to={`/products/${id}`} className="relative">
                    {best_seller && (
                        <span className="absolute top-2 left-2 px-1 font-serif text-sm tracking-wide text-white bg-orange-500 rounded-md shadow-2xl opacity-85">
                            Best Seller
                        </span>
                    )}

                    <img src={poster} className="object-fill mb-auto w-full h-96" alt={name} />
                  <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-5 transition duration-300 hover:bg-transparent"></div>
                </Link>
              <div className="flex-auto py-1 px-2 mb-auto">
                    <Link to={`/products/${id}`}>
                        <h5 className="my-2 text-xl font-semibold tracking-wide dark:text-gray-200 hover:text-indigo-400 truncate dark:hover:text-indigo-300">
                            {name}
                        </h5>
                    </Link>

                    <p className="mb-2 text-sm tracking-tight text-justify text-gray-700 dark:text-gray-400 line-clamp-2">
                        {overview}
                    </p>

                    <div className="flex flex-row p-2">
                        <Rating rating={rating} />
                    </div>

                    <div className="flex justify-between items-center p-2 mt-auto text-center border-t-2 border-neutral-100 dark:border-neutral-600 dark:text-neutral-50">
                        <span className="text-xl font-semibold text-green-600 dark:text-green-400">
                            <span className="font-serif">$</span>
                            {discount ? (
                                <span className="font-serif tracking-widest">{reduced_price}</span>
                            ) : (
                                <span className="font-serif tracking-widest">{price}</span>
                            )}
                        </span>

                        {discount && (
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-gray-500 line-through dark:text-yellow-200">
                                    <span className="font-serif">$</span>
                                    <span>{price}</span>
                                </span>
                                <span className="text-sm font-semibold text-red-700 dark:text-red-400">
                                    <span>{discount}</span>
                                    <span className="font-serif">% Off</span>
                                </span>
                            </div>
                        )}

                        {!inCart && (
                            <button
                                onClick={() => addToCart(product)}
                                className={`py-1 px-1 font-bold text-white bg-blue-500 rounded hover:text-amber-100 hover:bg-blue-600 ${
                                    product.in_stock ? 'cursor-pointer' : 'cursor-not-allowed'
                                }`}
                                disabled={product.in_stock ? '' : 'disabled'}
                            >
                                <span className="mr-1 font-serif text-sm">Add To Cart</span>
                                <span className="text-sm font-bold">
                                    <i className="bi bi-cart-plus"></i>
                                </span>
                            </button>
                        )}

                        {inCart && (
                            <button
                                onClick={() => removeFromCart(product)}
                                className="py-1 px-1 font-bold text-white bg-red-500 rounded hover:text-amber-100 hover:bg-red-600"
                            >
                                <span className="mr-1 font-serif text-sm">Remove Item</span>
                                <span className="text-sm font-bold">
                                    <i className="bi bi-trash3"></i>
                                </span>
                            </button>
                        )}
                    </div>
                </div>
            </article>
        </div>
    );
};

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Rating } from '../components';
import { useCart } from '../context';
import { useTitle } from '../hooks';
import { getProduct } from '../services';

export const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    // global state using context
    const { cartList, addToCart, removeFromCart } = useCart();

    // state for item in cart
    const [inCart, setInCart] = useState(false);

    useEffect(() => {
        const productInCart = cartList.find((item) => item.id === product.id);
        if (productInCart) {
            setInCart(true);
        } else {
            setInCart(false);
        }
    }, [cartList, product.id]);

    //eslint-disable-next-line
    function handleAdd(product) {
        addToCart(product);
    }

    useTitle(product.name);

    useEffect(() => {
        async function fetchProducts() {
            const data = await getProduct(id);
            setProduct(data);
        }
        fetchProducts();
    }, [id]);

    return (
        <main>
            <section className="bg-gray-100 rounded-lg border dark:bg-gray-800 dark:border-gray-500/75">
                <div className="flex flex-col content-center pt-8 pr-8 pl-8 mb-2">
                    <h2 className="mb-2 text-2xl font-bold text-center dark:text-slate-200">
                        {product.name}
                    </h2>
                    <p className="font-serif text-sm italic text-justify text-slate-600 indent-10 dark:text-slate-200/75">
                        {product.overview}
                    </p>
                </div>
                <div className="py-8">
                    <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
                        <div className="flex flex-col -mx-4 md:flex-row">
                            <div className="px-4 max-w-xl">
                                <div className="mb-4 max-h-full bg-gray-300 rounded-lg">
                                    <img
                                        className="object-fill w-full max-h-full rounded-lg"
                                        src={product.poster}
                                        alt={product.name}
                                    />
                                </div>
                                <div className="flex justify-around -mx-2 mb-4">
                                    <div className="px-2">
                                        {!inCart && (
                                            <button
                                                onClick={() => addToCart(product)}
                                                className={`py-2 px-4 w-max font-serif font-medium tracking-wide text-white bg-blue-500 rounded-lg hover:text-amber-100 hover:bg-green-600 text-xl/4 ${
                                                    product.in_stock
                                                        ? 'cursor-pointer'
                                                        : 'cursor-not-allowed'
                                                }`}
                                                disabled={product.in_stock ? '' : 'disabled'}
                                            >
                                                Add to Cart <i className="bi bi-cart-check"></i>
                                            </button>
                                        )}

                                        {inCart && (
                                            <button
                                                onClick={() => removeFromCart(product)}
                                                className={`py-2 px-4 w-max font-serif font-medium tracking-wide text-white bg-red-600 rounded-lg hover:text-red-600 hover:bg-gray-100 hover:border-2 hover:border-red-600 text-xl/4 ${
                                                    product.in_stock ? '' : 'cursor-not-allowed'
                                                }`}
                                                disabled={product.in_stock ? '' : 'disabled'}
                                            >
                                                Remove Item <i className="bi bi-trash"></i>
                                            </button>
                                        )}
                                    </div>
                                    <div className="px-2">
                                        <button className="py-2 px-4 w-max font-serif font-medium tracking-wide text-purple-700 bg-purple-200 rounded-lg hover:text-amber-100 hover:bg-pink-600 text-xl/4">
                                            <i className="bi bi-bag-heart"></i> Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 max-w-xl">
                                <div className="flex flex-auto justify-center items-center mb-4">
                                    <div className="px-2">
                                        {product.discount ? (
                                            <div className="py-1 px-2 w-max text-2xl font-semibold line-through rounded-md border-2 border-b border-orange-200 hover:text-green-700 focus:ring focus:ring-violet-300 focus:outline-none active:bg-gray-100 text-slate-600 decoration-red-600 dark:text-slate-300 dark:decoration-red-400 hover:dark:text-amber-200">
                                                <span className="mr-1 font-serif">$</span>
                                                <span className="tracking-widest">
                                                    {product.price}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="py-1 px-2 w-max text-2xl font-semibold rounded-md border-2 border-b border-orange-200 hover:text-pink-700 focus:ring focus:ring-violet-300 focus:outline-none active:bg-gray-100 text-slate-600 decoration-red-600 dark:text-slate-300 hover:dark:text-pink-400">
                                                <span className="mr-1 font-serif">$</span>
                                                <span className="tracking-widest">
                                                    {product.price}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {product.discount && (
                                    <ul className="flex flex-wrap justify-center items-center py-2 mb-4">
                                        <li className="px-2 dark:text-slate-200">
                                            <div className="py-1 mr-1 w-max font-serif text-xl/6">
                                                Grab for less
                                            </div>
                                        </li>

                                        <li className="px-2">
                                            <div className="py-1 px-2 w-max tracking-wide text-pink-600 rounded-md dark:text-green-400 text-lg/6">
                                                <span className="font-serif font-medium tracking-widest">
                                                    {product.discount}
                                                </span>
                                                <span className="mr-0.5 ml-0.5 font-serif font-semibold">
                                                    %
                                                </span>
                                                <span className="font-serif">Off</span>
                                            </div>
                                        </li>
                                        <li className="px-2 dark:text-slate-200">
                                            <div className="py-1 mr-1 w-max font-serif text-xl/6">
                                                @
                                            </div>
                                        </li>
                                        <li className="px-2">
                                            <div className="py-1 px-2 w-max font-semibold text-pink-600 rounded-md dark:text-orange-400 focus:outline-none text-lg/6">
                                                <span className="mr-1 font-serif">$</span>
                                                <span className="font-serif tracking-widest">
                                                    {product.reduced_price}
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                )}

                                <div className="flex flex-row justify-center items-center mb-4">
                                    <span>
                                        <Rating rating={product.rating} />
                                    </span>
                                </div>

                                <ul className="flex justify-around py-2 mb-4">
                                    {product.best_seller && (
                                        <li className="px-2">
                                            <div className="py-1 px-2 mr-2 w-max font-serif text-sm font-semibold text-amber-500 bg-amber-50 rounded-lg border">
                                                BEST SELLER
                                            </div>
                                        </li>
                                    )}

                                    {product.in_stock ? (
                                        <li className="px-2">
                                            <div className="py-1 px-2 mr-2 w-max font-serif text-sm font-semibold text-emerald-600 rounded-lg border bg-slate-100">
                                                INSTOCK
                                            </div>
                                        </li>
                                    ) : (
                                        <li className="px-2">
                                            <div className="py-1 px-2 mr-2 w-max font-serif text-sm font-semibold text-rose-700 rounded-lg border bg-slate-100">
                                                OUT OF STOCK
                                            </div>
                                        </li>
                                    )}

                                    <li className="px-2">
                                        <div className="py-1 px-2 mr-2 w-max font-serif text-sm font-semibold text-blue-500 rounded-lg border bg-slate-100">
                                            <span className="mr-1">{product.size}</span>
                                            <span className="">MB</span>
                                        </div>
                                    </li>
                                </ul>

                                <div className="">
                                    <span className="font-bold text-gray-700 dark:text-gray-200">
                                        {' '}
                                        Description:
                                    </span>
                                    <p className="justify-evenly mt-2 tracking-wide text-justify text-gray-600 dark:text-gray-200 text-xl/50">
                                        {product.details}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

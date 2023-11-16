import { useState } from 'react';
import { CartCard } from './CartCard';
import { CartCheckout } from './CartCheckout';

import { useCart } from '../../../context';

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(decimals);
}

export const CartList = () => {
    const [checkout, setCheckout] = useState(false);

    // call the context for global cart state
    const { cartList, total } = useCart();

    return (
        <>
            <section className="py-12 sm:py-16 lg:py-20 dark:bg-slate-800">
                <div className="px-4 mx-auto max-w-2xl sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-5 justify-center items-center pb-4">
                        <div className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                            Shopping Cart
                        </div>
                        <div className="-mt-5 text-5xl font-semibold text-slate-700 dark:text-slate-200">
                            Summary
                        </div>
                        <div className="text-xl">
                            <div className="text-xl text-slate-700 dark:text-slate-200">
                                <span className="mr-1 font-serif font-semibold">
                                    Items in Cart:
                                </span>
                                <span className="font-serif font-bold text-slate-800 dark:text-slate-100">
                                    {cartList.length}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-4 max-w-2xl md:mt-12">
                        <div className="bg-white rounded-lg shadow-lg dark:bg-slate-700">
                            <div className="py-6 px-4 sm:py-10 sm:px-8">
                                <div className="flow-root">
                                    {cartList.map((product) => (
                                        <CartCard key={product.id} product={product} />
                                    ))}
                                </div>

                                <div className="py-2 mt-6 border-t border-b">
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm font-medium text-slate-400 dark:text-slate-100">
                                            Subtotal
                                        </p>
                                        <div className="flex justify-between text-slate-600 dark:text-slate-200">
                                            <span className="mr-0.5 font-serif text-xl font-bold dark:text-orange-500 text-slate-500">
                                                $
                                            </span>
                                            <span className="font-serif text-xl font-semibold text-blue-400 dark:text-orange-400">
                                                {round(total, 2)}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm font-medium text-slate-400 dark:text-slate-100">
                                            Shipping
                                        </p>
                                        <div className="flex justify-between text-slate-600 dark:text-slate-200">
                                            <span className="mr-0.5 font-serif text-xl font-bold dark:text-orange-500 text-slate-500">
                                                $
                                            </span>
                                            <span className="font-serif text-xl font-semibold text-blue-400 dark:text-orange-400">
                                                {round(0, 2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-6">
                                    <p className="text-xl font-medium text-blue-600 dark:text-amber-500">
                                        Total
                                    </p>
                                    <div className="flex justify-between text-gray-900 dark:text-slate-200">
                                        <span className="mr-0.5 font-serif text-xl font-bold dark:text-amber-600 text-slate-500">
                                            $
                                        </span>
                                        <span className="text-xl font-semibold text-blue-600 dark:text-amber-500">
                                            {round(total, 2)}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6 text-center">
                                    <button
                                        onClick={() => setCheckout(true)}
                                        className="overflow-hidden relative w-48 h-12 text-lg bg-white rounded-lg shadow group"
                                    >
                                        <div className="absolute inset-0 w-3 bg-blue-500 transition-all ease-out dark:bg-amber-400 group-hover:w-full duration-[250ms]"></div>
                                        <span className="relative text-black group-hover:text-white">
                                            Checkout
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {checkout && <CartCheckout setCheckout={setCheckout} />}
        </>
    );
};

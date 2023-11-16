import { Link } from 'react-router-dom';

import { useCart } from '../../../context';

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(decimals);
}

export const WishlistCard = ({ product }) => {
    const { removeFromCart } = useCart();

    return (
        <div className="py-4">
            <ul className="space-y-4">
                <li className="flex gap-4 items-center">
                    <div className="shrink-0">
                        <img
                            className="object-cover h-24 rounded-lg xs:w-full"
                            src={product.poster}
                            alt={product.name}
                        />
                    </div>

                    <div>
                        <Link to={`/products/${product.id}`}>
                            <p className="font-serif text-lg text-gray-900 dark:text-slate-100">
                                {product.name}
                            </p>
                        </Link>
                        <div className="flex mt-0.5 space-y-px text-gray-600">
                            <div className="inline-flex items-center">
                                <span className="inline mr-2 font-serif text-xs dark:text-slate-100">
                                    Availability:
                                </span>
                                {product.in_stock ? (
                                    <span className="inline text-2xl font-semibold text-green-600 dark:text-green-400">
                                        <i className="bi bi-check2-circle"></i>
                                    </span>
                                ) : (
                                    <span className="inline font-serif text-sm italic font-medium text-red-600 dark:text-red-400">
                                        <i className="bi bi-emoji-frown"></i>
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-1 gap-2 justify-end items-center">
                        <button
                            onClick={() => removeFromCart(product)}
                            className="flex justify-between items-end sm:justify-end sm:items-start sm:mt-0"
                        >
                            <span className="w-6 h-6 text-2xl font-bold text-red-400">
                                <i className="bi bi-trash"></i>
                            </span>
                        </button>

                        <div>
                            <div className="w-20 text-gray-900 sm:order-2 sm:ml-8 sm:text-right shrink-0">
                                <span className="inline-block mr-0.5 font-serif text-xl font-bold dark:text-cyan-500 text-slate-500">
                                    $
                                </span>
                                <span className="inline-block text-lg font-semibold tracking-wide text-green-600 dark:text-cyan-400">
                                    {round(product.reduced_price, 2)}
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};
